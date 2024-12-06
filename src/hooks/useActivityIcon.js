import { FaUserMd, FaPrescription, FaFlask } from 'react-icons/fa';

export const useActivityIcon = (type) => {
  switch (type) {
    case 'appointment':
      return { 
        Icon: FaUserMd, 
        color: 'text-blue-500', 
        bgColor: 'bg-blue-100' 
      };
    case 'prescription':
      return { 
        Icon: FaPrescription, 
        color: 'text-green-500', 
        bgColor: 'bg-green-100' 
      };
    case 'lab':
      return { 
        Icon: FaFlask, 
        color: 'text-purple-500', 
        bgColor: 'bg-purple-100' 
      };
    default:
      return { 
        Icon: FaUserMd, 
        color: 'text-gray-500', 
        bgColor: 'bg-gray-100' 
      };
  }
};