import React, { useState } from 'react';
import '../styles/LiveChat.css';

const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! Welcome to DriveEasy Luxury Rentals. How can I help you today?',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Thanks for your message! Our team will get back to you shortly. For immediate assistance, call us at +91 9876543210.',
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const quickQuestions = [
    'What are your operating hours?',
    'Do you offer insurance?',
    'Can I modify my booking?',
    'What payment methods do you accept?'
  ];

  return (
    <>
      {/* Chat Widget */}
      <div className={`chat-widget ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">
            <div className="chat-avatar">DE</div>
            <div className="chat-info">
              <h4>LuxWheels Support</h4>
              <span className="status online">Online</span>
            </div>
          </div>
          <button className="chat-close" onClick={() => setIsChatOpen(false)}>
            ×
          </button>
        </div>

        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{message.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="quick-questions">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              className="quick-question"
              onClick={() => setNewMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            required
          />
          <button type="submit">
            <span>Send</span>
          </button>
        </form>
      </div>

      {/* Chat Toggle Button */}
      <button className="chat-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>
        <span className="chat-icon">💬</span>
        <span className="chat-notification"></span>
      </button>
    </>
  );
};

export default LiveChat;