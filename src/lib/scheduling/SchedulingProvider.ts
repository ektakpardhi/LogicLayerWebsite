/**
 * Abstract Scheduling Provider Interface
 * Allows swapping between different calendar/scheduling implementations
 * (Google Calendar, Outlook, Calendly, custom, etc.)
 */

import { Appointment } from '@/types';

export interface TimeSlot {
  time: string; // HH:MM format
  available: boolean;
}

export interface AvailableDate {
  date: string; // YYYY-MM-DD format
  available: boolean;
}

export interface SchedulingConfig {
  workingDays: number[]; // 0-6 (Sunday-Saturday)
  businessHoursStart: string; // HH:MM format (e.g., "09:00")
  businessHoursEnd: string; // HH:MM format (e.g., "17:00")
  meetingDuration: number; // in minutes
  bufferTime: number; // minutes between meetings
  timezone: string;
  blockedDates: string[]; // YYYY-MM-DD format
  blockedTimes: string[]; // HH:MM format
}

export interface BookingData {
  meeting_type_id: string;
  date: string;
  start_time: string;
  timezone: string;
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  job_title?: string;
  service?: string;
  project_description?: string;
  budget?: string;
  timeline?: string;
}

export abstract class SchedulingProvider {
  abstract name: string;

  /**
   * Get available dates for scheduling
   */
  abstract getAvailableDates(
    meetingDuration: number,
    daysAhead: number,
    timezone: string
  ): Promise<AvailableDate[]>;

  /**
   * Get available time slots for a specific date
   */
  abstract getAvailableTimeSlots(
    date: string,
    meetingDuration: number,
    timezone: string
  ): Promise<TimeSlot[]>;

  /**
   * Create a booking/appointment
   */
  abstract createBooking(bookingData: BookingData): Promise<Appointment>;

  /**
   * Get appointment details
   */
  abstract getAppointment(appointmentId: string): Promise<Appointment | null>;

  /**
   * Cancel an appointment
   */
  abstract cancelAppointment(appointmentId: string): Promise<boolean>;

  /**
   * Reschedule an appointment
   */
  abstract rescheduleAppointment(
    appointmentId: string,
    newDate: string,
    newTime: string,
    timezone: string
  ): Promise<Appointment | null>;

  /**
   * Send confirmation email
   */
  abstract sendConfirmationEmail(appointment: Appointment): Promise<boolean>;

  /**
   * Send notification to business
   */
  abstract sendNotificationToAdmin(appointment: Appointment): Promise<boolean>;

  /**
   * Get scheduling configuration
   */
  abstract getConfig(): Promise<SchedulingConfig>;
}

export default SchedulingProvider;
