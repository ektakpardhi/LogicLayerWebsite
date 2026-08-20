/**
 * Mock Scheduling Provider
 * Used for initial development and testing
 * Can be replaced with real providers (Google Calendar, Outlook, etc.)
 */

import SchedulingProvider, {
  TimeSlot,
  AvailableDate,
  BookingData,
  SchedulingConfig,
} from './SchedulingProvider';
import { Appointment } from '@/types';

export class MockSchedulingProvider extends SchedulingProvider {
  name = 'Mock Scheduling Provider';

  private appointments: Map<string, Appointment> = new Map();
  private config: SchedulingConfig = {
    workingDays: [1, 2, 3, 4, 5], // Monday-Friday
    businessHoursStart: '09:00',
    businessHoursEnd: '17:00',
    meetingDuration: 30,
    bufferTime: 15,
    timezone: 'America/New_York',
    blockedDates: [],
    blockedTimes: ['12:00', '12:30'], // Lunch break
  };

  async getAvailableDates(
    meetingDuration: number,
    daysAhead: number = 30,
    timezone: string
  ): Promise<AvailableDate[]> {
    void meetingDuration;
    void timezone;
    const dates: AvailableDate[] = [];
    const today = new Date();

    for (let i = 1; i <= daysAhead; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);

      const dateStr = date.toISOString().split('T')[0];
      const dayOfWeek = date.getDay();

      // Only show working days
      const isWorkingDay = this.config.workingDays.includes(dayOfWeek);
      const isNotBlocked = !this.config.blockedDates.includes(dateStr);

      dates.push({
        date: dateStr,
        available: isWorkingDay && isNotBlocked,
      });
    }

    return dates;
  }

  async getAvailableTimeSlots(
    date: string,
    meetingDuration: number,
    timezone: string
  ): Promise<TimeSlot[]> {
    void timezone;
    const slots: TimeSlot[] = [];
    const [startHour, startMin] = this.config.businessHoursStart.split(':').map(Number);
    const [endHour, endMin] = this.config.businessHoursEnd.split(':').map(Number);

    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;

    for (let minutes = startMinutes; minutes < endMinutes; minutes += meetingDuration) {
      const hour = Math.floor(minutes / 60);
      const min = minutes % 60;
      const timeStr = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;

      // Check if time slot is blocked or in lunch break
      const isBlocked = this.config.blockedTimes.includes(timeStr);
      const hasConflict = this.hasAppointmentConflict(date, timeStr, meetingDuration);

      slots.push({
        time: timeStr,
        available: !isBlocked && !hasConflict,
      });
    }

    return slots;
  }

  async createBooking(bookingData: BookingData): Promise<Appointment> {
    const appointmentId = `appt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const [startHour, startMin] = bookingData.start_time.split(':').map(Number);
    const endMinutes = startHour * 60 + startMin + this.config.meetingDuration;

    const appointment: Appointment = {
      id: appointmentId,
      created_at: new Date(),
      meeting_type_id: bookingData.meeting_type_id,
      meeting_duration: 30,
      date: bookingData.date,
      start_time: bookingData.start_time,
      end_time: `${String(Math.floor(endMinutes / 60)).padStart(2, '0')}:${String(endMinutes % 60).padStart(2, '0')}`,
      timezone: bookingData.timezone,
      first_name: bookingData.first_name,
      last_name: bookingData.last_name,
      email: bookingData.email,
      company: bookingData.company,
      phone: bookingData.phone,
      website: bookingData.website,
      job_title: bookingData.job_title,
      service: bookingData.service,
      project_description: bookingData.project_description,
      budget: bookingData.budget,
      timeline: bookingData.timeline,
      status: 'confirmed',
    };

    this.appointments.set(appointmentId, appointment);

    // Send emails (mock)
    await this.sendConfirmationEmail(appointment);
    await this.sendNotificationToAdmin(appointment);

    return appointment;
  }

  async getAppointment(appointmentId: string): Promise<Appointment | null> {
    return this.appointments.get(appointmentId) || null;
  }

  async cancelAppointment(appointmentId: string): Promise<boolean> {
    const appointment = this.appointments.get(appointmentId);
    if (!appointment) return false;

    appointment.status = 'cancelled';
    this.appointments.set(appointmentId, appointment);
    return true;
  }

  async rescheduleAppointment(
    appointmentId: string,
    newDate: string,
    newTime: string,
    timezone: string
  ): Promise<Appointment | null> {
    const appointment = this.appointments.get(appointmentId);
    if (!appointment) return null;

    appointment.date = newDate;
    appointment.start_time = newTime;
    appointment.timezone = timezone;
    appointment.status = 'rescheduled';
    this.appointments.set(appointmentId, appointment);
    return appointment;
  }

  async sendConfirmationEmail(appointment: Appointment): Promise<boolean> {
    // Mock email sending
    console.log(`[MOCK] Confirmation email sent to ${appointment.email}`);
    return true;
  }

  async sendNotificationToAdmin(appointment: Appointment): Promise<boolean> {
    // Mock email sending
    console.log(`[MOCK] Admin notification sent for ${appointment.first_name} ${appointment.last_name}`);
    return true;
  }

  async getConfig(): Promise<SchedulingConfig> {
    return this.config;
  }

  private hasAppointmentConflict(date: string, time: string, duration: number): boolean {
    // Check if any existing appointments conflict with this time slot
    for (const appointment of this.appointments.values()) {
      if (appointment.date === date && appointment.status !== 'cancelled') {
        const requestedStart = this.toMinutes(time);
        const requestedEnd = requestedStart + duration;
        const bookedStart = this.toMinutes(appointment.start_time);
        const bookedEnd = bookedStart + appointment.meeting_duration;
        if (requestedStart < bookedEnd && requestedEnd > bookedStart) {
          return true;
        }
      }
    }
    return false;
  }

  private toMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}

export default MockSchedulingProvider;
