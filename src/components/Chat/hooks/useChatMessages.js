import { useState, useEffect } from 'react';
import socketService from '../../../utils/socketService';
import { toast } from 'react-toastify';

export const useChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const doctorId = 'doctor-123'; // In real app, this would come from auth
    socketService.connect(doctorId);
    setIsConnected(true);

    const unsubscribe = socketService.subscribeToMessages((message) => {
      setMessages(prev => [...prev, message]);
      toast.info(`New message from ${message.sender}`);
    });

    return () => {
      unsubscribe();
      socketService.disconnect();
    };
  }, []);

  const sendMessage = (text) => {
    if (!isConnected) {
      toast.error('Not connected to chat server');
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      sender: 'doctor',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newMessage]);
    socketService.sendMessage('patient-123', text); // In real app, recipientId would be dynamic
  };

  return {
    messages,
    isConnected,
    sendMessage,
  };
};