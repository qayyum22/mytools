import React, { useState, useEffect, useRef } from 'react';
import '../styles/chat.css';
import userPhoto from '../letter-q.png';
import botPhoto from '../letter-q.png';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [activeTool, setActiveTool] = useState('chat');
    const [bookmarkedChats, setBookmarkedChats] = useState([]);
    const chatRef = useRef(null); // Added useRef for chatRef

    // Bot response logic
    const botResponse = (userInput) => {
        switch (activeTool) {
            case 'weather':
                return `It's sunny in ${userInput}!`;
            case 'calculator':
                try {
                    return `Result: ${eval(userInput)}`;
                } catch (e) {
                    return "Invalid calculation.";
                }
            case 'joke':
                return "Why did the computer go to art school? Because it wanted to learn how to draw a better 'byte'.";
            default:
                return `I understand you said: ${userInput}`;
        }
    };

    const wittyResponses = [
        "Ah, the age-old question of 'why'...",
        "Because humans, that's why!"
    ];

    const handleSubmit = () => {
        if (inputText.trim() !== '') {
            const newUserMessage = { text: inputText, user: 'user', time: new Date().toLocaleTimeString() };
            setMessages([...messages, newUserMessage]);

            // Immediately add bot's response placeholder
            setMessages(prevMessages => [...prevMessages, { text: "Thinking...", user: 'bot', time: new Date().toLocaleTimeString() }]);

            setTimeout(() => {
                const botMessage = botResponse(inputText);
                setMessages(prevMessages => {
                    const lastIndex = prevMessages.length - 1;
                    return [...prevMessages.slice(0, lastIndex), { text: botMessage, user: 'bot', time: new Date().toLocaleTimeString() }];
                });
            }, 1000);

            setInputText('');
        }
    };

    // Toggle bookmark
    const toggleBookmark = (message) => {
        if (bookmarkedChats.some(b => b.text === message.text)) {
            setBookmarkedChats(bookmarkedChats.filter(b => b.text !== message.text));
        } else {
            setBookmarkedChats([...bookmarkedChats, message]);
        }
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop += 1000; // Scroll to the bottom
        }
    }, [messages.length]);

    return (
        <div className="chatbot-app">
            <div className="sidebar">
                <button onClick={() => setActiveTool('chat')} className={activeTool === 'chat' ? 'active' : ''}>Chat</button>
                <button onClick={() => setActiveTool('weather')} className={activeTool === 'weather' ? 'active' : ''}>Weather</button>
                <button onClick={() => setActiveTool('calculator')} className={activeTool === 'calculator' ? 'active' : ''}>Calculator</button>
                <button onClick={() => setActiveTool('joke')} className={activeTool === 'joke' ? 'active' : ''}>Joke</button>
            </div>

            <div className="chat-container">
                <div className="chat-display">

                    <div className="bookmarked-chats">
                        {/* Bookmarked chats section remains the same */}
                    </div>
                    {/* <div className="current-chats">
            {messages.map((message, index) => (
              <div key={index} className={message.user}>
                <p>{message.text}</p>
                <small>{message.time}</small>
                {message.user === 'user' && (
                  <button onClick={() => toggleBookmark(message)}>Bookmark</button>
                )}
              </div>
            ))}
          </div> */}
                    <div className="current-chats" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }} ref={chatRef}>
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.user}`}>
                                {message.user === 'user' ? (
                                    <div>
                                        <img src={userPhoto} alt="User" className="message-photo" />
                                        <span>{message.text}</span>
                                        <small>{message.time}</small>
                                        {message.user === 'user' && (
                                            <button onClick={() => toggleBookmark(message)}>Bookmark</button>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <img src={botPhoto} alt="Bot" className="message-photo" />
                                        <span>{message.text}</span>
                                        <small>{message.time}</small>
                                        <button onClick={() => navigator.clipboard.writeText(message.text)}>Copy</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>



                </div>
                <div className="input-area">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your message..."
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    />
                    <button onClick={handleSubmit}>Send</button>
                </div>
            </div>
            <div className="bookmarked-chats">
                <h3>Bookmarked Chats</h3>
                {bookmarkedChats.map((message, index) => (
                    <div key={index} className={message.user}>
                        <p>{message.text}</p>
                        <small>{message.time}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;