'use client';

import React, { useState } from 'react';
import { ChevronLeft, Check, Calendar, Clock, User, FileText } from 'lucide-react';
import { MEETING_TYPES } from '@/data/meetingTypes';
import { formatSchedulingDate, format12HourTime, formatTimeRange, TIMEZONES, getUserTimezone } from '@/lib/scheduling/utils';
import { MockSchedulingProvider } from '@/lib/scheduling/MockSchedulingProvider';
import { BookingData } from '@/lib/scheduling/SchedulingProvider';
import { Appointment } from '@/types';

type Step = 'meeting' | 'date' | 'time' | 'details' | 'project' | 'review' | 'confirmation';

interface BookingState {
  meeting_type_id: string;
  date: string;
  start_time: string;
  timezone: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  phone: string;
  website: string;
  job_title: string;
  service: string;
  project_description: string;
  budget: string;
  timeline: string;
}

const SchedulePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('meeting');
  const [booking, setBooking] = useState<BookingState>({
    meeting_type_id: '',
    date: '',
    start_time: '',
    timezone: getUserTimezone(),
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    job_title: '',
    service: '',
    project_description: '',
    budget: '',
    timeline: '',
  });
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const provider = new MockSchedulingProvider();

  // Get selected meeting type details
  const selectedMeetingType = MEETING_TYPES.find((mt) => mt.id === booking.meeting_type_id);
  const selectedTimezone = TIMEZONES.find((tz) => tz.value === booking.timezone);
  const progressSteps: { key: Step; label: string }[] = [
    { key: 'meeting', label: 'Meeting' },
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    { key: 'details', label: 'Details' },
    { key: 'review', label: 'Confirm' },
  ];
  const progressIndex = Math.min(progressSteps.findIndex((step) => step.key === currentStep), progressSteps.length - 1);

  const Progress = () => (
    <div className="mb-10 border-b border-slate-300 pb-5" aria-label="Booking progress">
      <div className="flex items-center justify-between gap-2">
        {progressSteps.map((step, index) => (
          <div key={step.key} className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.08em] ${index <= progressIndex ? 'text-blue-700' : 'text-slate-400'}`}>
            <span className={`grid h-7 w-7 place-items-center border ${index <= progressIndex ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300'}`}>{index + 1}</span>
            <span className="hidden sm:inline">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // Load available dates when meeting type is selected
  const handleMeetingTypeSelect = async (meetingTypeId: string) => {
    setBooking((prev) => ({
      ...prev,
      meeting_type_id: meetingTypeId,
    }));
    setCurrentStep('date');

    // Fetch available dates
    const dates = await provider.getAvailableDates(30, 30, booking.timezone);
    const availableDateStrings = dates
      .filter((d) => d.available)
      .map((d) => d.date);
    setAvailableDates(availableDateStrings);
  };

  // Load available times when date is selected
  const handleDateSelect = async (date: string) => {
    setBooking((prev) => ({
      ...prev,
      date,
    }));
    setCurrentStep('time');

    // Fetch available times
    const times = await provider.getAvailableTimeSlots(
      date,
      selectedMeetingType?.duration || 30,
      booking.timezone
    );
    const availableTimeStrings = times
      .filter((t) => t.available)
      .map((t) => t.time);
    setAvailableTimes(availableTimeStrings);
  };

  const handleTimeSelect = (time: string) => {
    setBooking((prev) => ({
      ...prev,
      start_time: time,
    }));
    setCurrentStep('details');
  };

  const validateDetailsForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!booking.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!booking.last_name.trim()) newErrors.last_name = 'Last name is required';
    if (!booking.email.trim()) newErrors.email = 'Email is required';
    if (booking.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDetailsNext = () => {
    if (validateDetailsForm()) {
      setCurrentStep('project');
    }
  };

  const handleProjectNext = () => {
    setCurrentStep('review');
  };

  const handleConfirmBooking = async () => {
    setIsLoading(true);
    try {
      const bookingData: BookingData = {
        meeting_type_id: booking.meeting_type_id,
        date: booking.date,
        start_time: booking.start_time,
        timezone: booking.timezone,
        first_name: booking.first_name,
        last_name: booking.last_name,
        email: booking.email,
        company: booking.company || undefined,
        phone: booking.phone || undefined,
        website: booking.website || undefined,
        job_title: booking.job_title || undefined,
        service: booking.service || undefined,
        project_description: booking.project_description || undefined,
        budget: booking.budget || undefined,
        timeline: booking.timeline || undefined,
      };

      const result = await provider.createBooking(bookingData);
      setAppointment(result);
      setCurrentStep('confirmation');
    } catch (error) {
      console.error('Booking error:', error);
      setErrors({ submit: 'Failed to create booking. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    const stepOrder: Step[] = ['meeting', 'date', 'time', 'details', 'project', 'review', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  // Step: Meeting Type Selection
  if (currentStep === 'meeting') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Progress />
          <div className="text-center mb-12">
            <h1 className="heading-2 mb-4">Let's Talk About What's Next</h1>
            <p className="body-text text-gray-600">
              Have a technology challenge, a new product idea, or an opportunity to improve an existing system?
              Schedule a conversation with LogicLayer Solutions and let's explore how we can help.
            </p>
          </div>

          <div className="space-y-4">
            {MEETING_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => handleMeetingTypeSelect(type.id)}
                className="w-full text-left card p-6 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{type.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{type.description}</p>
                    <p className="text-xs text-gray-500">Duration: {type.duration} minutes</p>
                  </div>
                  <ChevronLeft size={20} className="rotate-180 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Step: Date Selection
  if (currentStep === 'date') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Progress />
          <button
            onClick={goBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back
          </button>

          <div className="text-center mb-12">
            <h1 className="heading-2 mb-2">Select a Date</h1>
            <p className="text-gray-600 mb-4">
              {selectedMeetingType?.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {availableDates.map((date) => (
              <button
                key={date}
                onClick={() => handleDateSelect(date)}
                className="card p-4 hover:shadow-md hover:border-blue-300 transition-all text-left"
              >
                <div className="flex items-center">
                  <Calendar size={18} className="text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">
                      {formatSchedulingDate(date)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long' })}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Step: Time Selection
  if (currentStep === 'time') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={goBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back
          </button>

          <div className="text-center mb-12">
            <h1 className="heading-2 mb-2">Select a Time</h1>
            <p className="text-gray-600">
              {formatSchedulingDate(booking.date)} in {selectedTimezone?.name}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className="card p-4 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transition-all text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <Clock size={18} className="text-blue-600" />
                </div>
                <div className="font-medium text-gray-900">
                  {format12HourTime(time)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Step: Details Form
  if (currentStep === 'details') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Progress />
          <button
            onClick={goBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back
          </button>

          <div className="text-center mb-12">
            <h1 className="heading-2 mb-2">Tell Us About Yourself</h1>
            <p className="text-gray-600">We'll send confirmation details to your email</p>
          </div>

          <div className="card p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleDetailsNext();
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={booking.first_name}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, first_name: e.target.value }))
                    }
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.first_name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={booking.last_name}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, last_name: e.target.value }))
                    }
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.last_name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Smith"
                  />
                  {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-900 mb-2">Your Time Zone</label>
                <select
                  id="timezone"
                  value={booking.timezone}
                  onChange={(e) => setBooking((prev) => ({ ...prev, timezone: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {TIMEZONES.map((timezone) => <option key={timezone.value} value={timezone.value}>{timezone.name} ({timezone.abbr})</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Business Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={booking.email}
                  onChange={(e) =>
                    setBooking((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Company <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={booking.company}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, company: e.target.value }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ABC Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Website <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    value={booking.website}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, website: e.target.value }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Job Title <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={booking.job_title}
                    onChange={(e) =>
                      setBooking((prev) => ({ ...prev, job_title: e.target.value }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="CTO"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full mt-8"
              >
                Continue to Project Details
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Step: Project Details (Optional)
  if (currentStep === 'project') {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Progress />
          <button
            onClick={goBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back
          </button>

          <div className="text-center mb-12">
            <h1 className="heading-2 mb-2">Tell Us More About Your Project</h1>
            <p className="text-gray-600">All fields are optional – share as much or as little as you'd like</p>
          </div>

          <div className="card p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleProjectNext();
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  What do you need help with?
                </label>
                <select
                  value={booking.service}
                  onChange={(e) =>
                    setBooking((prev) => ({ ...prev, service: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service...</option>
                  <option value="software-development">Software Development</option>
                  <option value="web-digital-solutions">Web &amp; Digital Solutions</option>
                  <option value="ai-automation">AI &amp; Automation</option>
                  <option value="qa-test-automation">QA &amp; Test Automation</option>
                  <option value="cloud-devops">Cloud &amp; DevOps</option>
                  <option value="data-analytics">Data &amp; Analytics</option>
                  <option value="application-modernization">Application Modernization</option>
                  <option value="managed-technology-services">Managed Technology Services</option>
                  <option value="consulting">Technology Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Tell us about your project or challenge
                </label>
                <textarea
                  value={booking.project_description}
                  onChange={(e) =>
                    setBooking((prev) => ({ ...prev, project_description: e.target.value }))
                  }
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Describe what you're looking to build, improve, automate, or solve..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Estimated project size
                </label>
                <select
                  value={booking.budget}
                  onChange={(e) =>
                    setBooking((prev) => ({ ...prev, budget: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-10k">Under $10K</option>
                  <option value="10k-25k">$10K–$25K</option>
                  <option value="25k-50k">$25K–$50K</option>
                  <option value="50k-100k">$50K–$100K</option>
                  <option value="over-100k">$100K+</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Desired timeline
                </label>
                <select
                  value={booking.timeline}
                  onChange={(e) =>
                    setBooking((prev) => ({ ...prev, timeline: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1–3 Months</option>
                  <option value="3-6-months">3–6 Months</option>
                  <option value="6-plus-months">6+ Months</option>
                  <option value="exploring">Exploring</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="btn-ghost flex-1"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Review Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Step: Review
  if (currentStep === 'review' && selectedMeetingType) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Progress />
          <button
            onClick={goBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back
          </button>

          <div className="text-center mb-12">
            <h1 className="heading-2 mb-2">Review Your Meeting</h1>
            <p className="text-gray-600">Everything looks good? Confirm to complete your booking.</p>
          </div>

          <div className="space-y-6">
            {/* Meeting Details */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar size={18} className="mr-2 text-blue-600" />
                Meeting Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium text-gray-900">{selectedMeetingType.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-900">{formatSchedulingDate(booking.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium text-gray-900">
                    {formatTimeRange(booking.start_time, selectedMeetingType.duration)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Timezone:</span>
                  <span className="font-medium text-gray-900">{selectedTimezone?.name}</span>
                </div>
              </div>
            </div>

            {/* Client Details */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User size={18} className="mr-2 text-blue-600" />
                Your Information
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium text-gray-900">
                    {booking.first_name} {booking.last_name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">{booking.email}</span>
                </div>
                {booking.company && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Company:</span>
                    <span className="font-medium text-gray-900">{booking.company}</span>
                  </div>
                )}
                {booking.phone && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium text-gray-900">{booking.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Project Details (if provided) */}
            {booking.project_description && (
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText size={18} className="mr-2 text-blue-600" />
                  Project Details
                </h3>
                <div className="space-y-3 text-sm">
                  {booking.service && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium text-gray-900 text-right">{booking.service}</span>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600 mb-1">Challenge:</p>
                    <p className="text-gray-900 bg-gray-50 p-3 rounded">{booking.project_description}</p>
                  </div>
                  {booking.budget && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget:</span>
                      <span className="font-medium text-gray-900">{booking.budget}</span>
                    </div>
                  )}
                  {booking.timeline && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timeline:</span>
                      <span className="font-medium text-gray-900">{booking.timeline}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                {errors.submit}
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                onClick={goBack}
                className="btn-ghost flex-1"
              >
                Edit Details
              </button>
              <button
                onClick={handleConfirmBooking}
                disabled={isLoading}
                className="btn-primary flex-1"
              >
                {isLoading ? 'Confirming...' : 'Confirm Meeting'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step: Confirmation
  if (currentStep === 'confirmation' && appointment) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h1 className="heading-2 mb-2">Meeting Scheduled</h1>
            <p className="text-gray-600">
              You're all set. Your conversation with LogicLayer Solutions has been scheduled.
            </p>
          </div>

          <div className="card p-8 mb-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Meeting Confirmation</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between pb-4 border-b border-gray-200">
                <span className="text-gray-600">Meeting Type:</span>
                <span className="font-medium text-gray-900">{selectedMeetingType?.name}</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-gray-200">
                <span className="text-gray-600">Date & Time:</span>
                <span className="font-medium text-gray-900">
                  {formatSchedulingDate(appointment.date)},&nbsp;
                  {formatTimeRange(appointment.start_time, appointment.meeting_duration)}
                </span>
              </div>
              <div className="flex justify-between pb-4 border-b border-gray-200">
                <span className="text-gray-600">Timezone:</span>
                <span className="font-medium text-gray-900">{selectedTimezone?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Confirmation Sent To:</span>
                <span className="font-medium text-gray-900">{appointment.email}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <p className="text-blue-900 text-sm">
              <strong>✓ Confirmation email sent.</strong> We've sent the meeting details and confirmation to your email
              address. Check your inbox and add this meeting to your calendar.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                // In a real app, this would trigger a calendar add
                alert('Calendar integration coming soon!');
              }}
              className="btn-secondary w-full"
            >
              Add to Calendar
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="btn-ghost w-full"
            >
              Back to LogicLayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SchedulePage;
