import api from '../services/api';
import { toast } from 'react-toastify';

export const checkBackendHealth = async () => {
  try {
    const response = await api.get('/health');
    if (response.data.status === 'ok') {
      return true;
    }
    toast.error('Backend service is not healthy');
    return false;
  } catch (error) {
    toast.error('Unable to connect to backend service');
    return false;
  }
};

export const testMongoConnection = async () => {
  try {
    const response = await api.get('/health/db');
    if (response.data.status === 'ok') {
      return true;
    }
    toast.error('Database connection is not healthy');
    return false;
  } catch (error) {
    toast.error('Unable to connect to database');
    return false;
  }
};