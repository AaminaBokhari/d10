import React from 'react';
import ActivityItem from './ActivityItem';

function ActivityList({ activities }) {
  if (!activities.length) {
    return (
      <div className="text-center py-4 text-gray-500">
        No recent activities
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <ActivityItem key={activity._id} activity={activity} />
      ))}
    </div>
  );
}

export default ActivityList;