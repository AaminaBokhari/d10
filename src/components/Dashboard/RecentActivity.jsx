import React from 'react';
import { useRecentActivity } from '../../hooks/useRecentActivity';
import ActivityList from './ActivityList';
import LoadingSkeleton from '../common/LoadingSkeleton';

function RecentActivity() {
  const { activities, loading, refreshActivities } = useRecentActivity();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
      
      {loading ? (
        <LoadingSkeleton count={3} />
      ) : (
        <ActivityList activities={activities} />
      )}
      
      <button 
        onClick={refreshActivities}
        className="w-full mt-6 text-blue-500 hover:text-blue-600 text-sm font-medium"
      >
        Refresh Activity →
      </button>
    </div>
  );
}

export default RecentActivity;