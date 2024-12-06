import React from 'react';
import { format } from 'date-fns';

function DateTimePicker({ selectedDate, onDateChange }) {
  const today = new Date();
  const minTime = '09:00';
  const maxTime = '17:00';
  
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          value={format(selectedDate, 'yyyy-MM-dd')}
          min={format(today, 'yyyy-MM-dd')}
          onChange={(e) => {
            const newDate = new Date(e.target.value);
            newDate.setHours(selectedDate.getHours());
            newDate.setMinutes(selectedDate.getMinutes());
            onDateChange(newDate);
          }}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time
        </label>
        <input
          type="time"
          value={format(selectedDate, 'HH:mm')}
          min={minTime}
          max={maxTime}
          step={1800} // 30-minute intervals
          onChange={(e) => {
            const [hours, minutes] = e.target.value.split(':');
            const newDate = new Date(selectedDate);
            newDate.setHours(parseInt(hours));
            newDate.setMinutes(parseInt(minutes));
            onDateChange(newDate);
          }}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default DateTimePicker;