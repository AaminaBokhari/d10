import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { updateAppointment, deleteAppointment } from '../../services/appointmentService';
import AppointmentModal from './AppointmentModal';
import DateTimePicker from './DateTimePicker';
import { format } from 'date-fns';

function AppointmentActions({ appointment, onUpdate }) {
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [newDateTime, setNewDateTime] = useState(new Date(appointment.dateTime));

  const handleReschedule = async () => {
    try {
      const updatedAppointment = await updateAppointment(appointment._id, {
        dateTime: newDateTime,
        status: 'Scheduled'
      });
      
      onUpdate(updatedAppointment);
      toast.success('Appointment rescheduled successfully');
      setIsRescheduleModalOpen(false);
    } catch (error) {
      toast.error('Failed to reschedule appointment');
    }
  };

  const handleCancel = async () => {
    try {
      const updatedAppointment = await updateAppointment(appointment._id, {
        status: 'Cancelled'
      });
      
      onUpdate(updatedAppointment);
      toast.success('Appointment cancelled successfully');
      setIsCancelModalOpen(false);
    } catch (error) {
      toast.error('Failed to cancel appointment');
    }
  };

  return (
    <>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsRescheduleModalOpen(true)}
          disabled={appointment.status === 'Cancelled'}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Reschedule
        </button>
        <button
          onClick={() => setIsCancelModalOpen(true)}
          disabled={appointment.status === 'Cancelled'}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
      </div>

      <AppointmentModal
        isOpen={isRescheduleModalOpen}
        onClose={() => setIsRescheduleModalOpen(false)}
        title="Reschedule Appointment"
        confirmText="Reschedule"
        onConfirm={handleReschedule}
      >
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Current appointment: {format(new Date(appointment.dateTime), 'PPp')}
          </p>
          <DateTimePicker
            selectedDate={newDateTime}
            onDateChange={setNewDateTime}
          />
        </div>
      </AppointmentModal>

      <AppointmentModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        title="Cancel Appointment"
        confirmText="Yes, Cancel"
        onConfirm={handleCancel}
      >
        <p className="text-gray-600">
          Are you sure you want to cancel this appointment? This action cannot be undone.
        </p>
      </AppointmentModal>
    </>
  );
}

export default AppointmentActions;