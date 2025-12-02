import React, { useState } from 'react';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChatIndex, setActiveChatIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');

    // Bot response
    setTimeout(() => {
      const botResponse = {
        text: "I am an AI assistant. How can I help you today?",
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      const finalMessages = [...updatedMessages, botResponse];
      setMessages(finalMessages);
      saveChat(finalMessages);
    }, 1000);
  };

  const saveChat = (msgs) => {
    if (activeChatIndex === null) {
      setChatHistory([...chatHistory, msgs]);
      setActiveChatIndex(chatHistory.length);
    } else {
      const updatedHistory = [...chatHistory];
      updatedHistory[activeChatIndex] = msgs;
      setChatHistory(updatedHistory);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newMessage = {
        text: '',
        isUser: true,
        timestamp: new Date().toLocaleTimeString(),
        file: URL.createObjectURL(file)
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      saveChat(updatedMessages);
    }
  };

  const loadChat = (index) => {
    setActiveChatIndex(index);
    setMessages(chatHistory[index]);
  };

  const startNewChat = () => {
    setMessages([]);
    setActiveChatIndex(null);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Sidebar */}
      <div className="chatbot-sidebar">
        <h3>Past Chats</h3>
        <button onClick={startNewChat} className="new-chat-btn">+ New Chat</button>
        <ul>
          {chatHistory.map((chat, index) => (
            <li
              key={index}
              className={activeChatIndex === index ? 'active' : ''}
              onClick={() => loadChat(index)}
            >
              {chat.find(msg => msg.text)?.text.substring(0, 20) || 'Image Chat...'}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat */}
      <div className="chatbot">
        <div className="chatbot-hero">
          <h1 className="chatbot-title">
            AI <span className="highlight">Assistant</span>
          </h1>
          <p className="chatbot-subtitle">
            Your intelligent companion for all your queries
          </p>
        </div>

        <div className="chatbot-container">
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-avatar">
                <div className="avatar-glow"></div>
              </div>
              <div className="chatbot-info">
                <h3>AI Assistant</h3>
                <span className="status">Online</span>
              </div>
            </div>

            <div className="chatbot-messages">
              {messages.length === 0 ? (
                <div className="welcome-message">
                  <h3>Welcome to AI Assistant</h3>
                  <p>Start a conversation by typing a message below.</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.isUser ? 'user' : 'bot'}`}
                  >
                    <div className="message-content">
                      {message.text && <p>{message.text}</p>}
                      {message.file && (
                        <img
                          src={message.file}
                          alt="Uploaded"
                          className="message-image"
                        />
                      )}
                      <span className="message-time">{message.timestamp}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <form className="chatbot-input" onSubmit={handleSubmit}>
              <input
                type="text"
                className="chatbot-input-field"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />

              <button type="submit" className="chatbot-send-button" title="Send">
                ➤
              </button>

              <label htmlFor="imageUpload" className="chatbot-upload-button" title="Upload Image">
                  📎
              </label>
              <input
                type="file"
                id="imageUpload"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageUpload}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
