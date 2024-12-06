import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useActivityIcon } from '../../hooks/useActivityIcon';

function ActivityItem({ activity }) {
  const { Icon, color, bgColor } = useActivityIcon(activity.type);

  return (
    <div className="flex items-start space-x-4">
      <div className={`${bgColor} p-3 rounded-lg`}>
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-800">{activity.patient.name}</p>
          <span className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
      </div>
    </div>
  );
}

export default ActivityItem;