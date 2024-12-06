import { useState, useEffect, useCallback } from 'react';
import { getRecentActivity } from '../services/activityService';
import { toast } from 'react-toastify';

export const useRecentActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = useCallback(async () => {
    try {
      const data = await getRecentActivity();
      setActivities(data);
    } catch (error) {
      toast.error('Failed to fetch recent activities');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  const refreshActivities = () => {
    setLoading(true);
    fetchActivities();
  };

  return {
    activities,
    loading,
    refreshActivities
  };
};