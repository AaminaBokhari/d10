import React from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { useChatMessages } from './hooks/useChatMessages';

function ChatInterface() {
  const { messages, isConnected, sendMessage } = useChatMessages();

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-lg shadow-md">
      <ChatHeader isConnected={isConnected} />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
}

export default ChatInterface;