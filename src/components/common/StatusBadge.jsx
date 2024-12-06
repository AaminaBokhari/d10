import React from 'react';

const statusStyles = {
  Waiting: 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-green-100 text-green-800',
  Cancelled: 'bg-red-100 text-red-800',
  Completed: 'bg-blue-100 text-blue-800',
  default: 'bg-gray-100 text-gray-800'
};

function StatusBadge({ status }) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
      statusStyles[status] || statusStyles.default
    }`}>
      {status}
    </span>
  );
}

export default StatusBadge;