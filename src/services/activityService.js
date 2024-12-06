import api from './api';

export const getRecentActivity = async () => {
  try {
    const response = await api.get('/activity/recent');
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch activities');
  }
};

export const createActivity = async (activityData) => {
  try {
    const response = await api.post('/activity', activityData);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Failed to create activity');
  }
};