import { io } from 'socket.io-client';
import { toast } from 'react-toastify';

class SocketService {
  constructor() {
    this.socket = null;
    this.messageHandlers = new Set();
  }

  connect(userId) {
    if (this.socket) return;

    this.socket = io('http://localhost:3000', {
      query: { userId },
      transports: ['websocket'],
    });

    this.socket.on('connect', () => {
      console.log('Socket connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    this.socket.on('error', (error) => {
      toast.error('Chat connection error');
      console.error('Socket error:', error);
    });

    this.socket.on('new-message', (message) => {
      this.messageHandlers.forEach(handler => handler(message));
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  subscribeToMessages(handler) {
    this.messageHandlers.add(handler);
    return () => this.messageHandlers.delete(handler);
  }

  sendMessage(recipientId, content) {
    if (!this.socket?.connected) {
      toast.error('Not connected to chat server');
      return;
    }

    this.socket.emit('send-message', {
      recipientId,
      content,
    });
  }

  joinRoom(roomId) {
    if (this.socket?.connected) {
      this.socket.emit('join-room', roomId);
    }
  }
}

export default new SocketService();