/**
 * Scheduling utilities and helpers
 */

/**
 * Convert time string HH:MM to minutes since midnight
 */
export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

/**
 * Convert minutes since midnight to HH:MM time string
 */
export const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
};

/**
 * Add minutes to a time string
 */
export const addMinutesToTime = (time: string, minutes: number): string => {
  const totalMinutes = timeToMinutes(time) + minutes;
  return minutesToTime(totalMinutes);
};

/**
 * Format date for display
 * Input: 2026-08-19 → Output: August 19, 2026
 */
export const formatSchedulingDate = (dateStr: string): string => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Get day of week for a date string
 * Input: 2026-08-19 → Output: Tuesday
 */
export const getDayOfWeek = (dateStr: string): string => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

/**
 * Format time in 12-hour format with AM/PM
 * Input: 14:30 → Output: 2:30 PM
 */
export const format12HourTime = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
};

/**
 * Format meeting time range
 * Input: "14:30", 30 → Output: "2:30 PM – 3:00 PM"
 */
export const formatTimeRange = (startTime: string, durationMinutes: number): string => {
  const startFormatted = format12HourTime(startTime);
  const endTime = addMinutesToTime(startTime, durationMinutes);
  const endFormatted = format12HourTime(endTime);
  return `${startFormatted} – ${endFormatted}`;
};

/**
 * Get available timezones
 */
export const TIMEZONES = [
  {
    name: 'Eastern Time',
    abbr: 'ET',
    value: 'America/New_York',
    offset: -5,
  },
  {
    name: 'Central Time',
    abbr: 'CT',
    value: 'America/Chicago',
    offset: -6,
  },
  {
    name: 'Mountain Time',
    abbr: 'MT',
    value: 'America/Denver',
    offset: -7,
  },
  {
    name: 'Pacific Time',
    abbr: 'PT',
    value: 'America/Los_Angeles',
    offset: -8,
  },
];

/**
 * Get user's browser timezone
 */
export const getUserTimezone = (): string => {
  if (typeof Intl === 'undefined') {
    return 'America/New_York'; // Fallback
  }
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

/**
 * Get matching timezone object
 */
export const getTimezoneByValue = (value: string) => {
  return TIMEZONES.find((tz) => tz.value === value);
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone format (basic)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?1?\d{9,15}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Validate that a date is in the future
 */
export const isFutureDate = (dateStr: string): boolean => {
  const selectedDate = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate > today;
};

/**
 * Generate a summary of the booking
 */
export interface BookingSummary {
  meetingType: string;
  date: string;
  dateFormatted: string;
  dayOfWeek: string;
  time: string;
  timeRange: string;
  timezone: string;
  name: string;
  email: string;
  company?: string;
  projectDescription?: string;
}

export const createBookingSummary = (
  meetingTypeName: string,
  date: string,
  time: string,
  timezone: string,
  firstName: string,
  lastName: string,
  email: string,
  company: string | undefined,
  projectDescription: string | undefined,
  durationMinutes: number
): BookingSummary => {
  return {
    meetingType: meetingTypeName,
    date,
    dateFormatted: formatSchedulingDate(date),
    dayOfWeek: getDayOfWeek(date),
    time,
    timeRange: formatTimeRange(time, durationMinutes),
    timezone,
    name: `${firstName} ${lastName}`,
    email,
    company,
    projectDescription,
  };
};
