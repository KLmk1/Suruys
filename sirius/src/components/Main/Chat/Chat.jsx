import React, { useState, useEffect } from 'react';
import styles from './Chat.module.scss';
import ChatForm from './ChatForm/СhatForm.jsx';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Приветственное сообщение от бота с кнопками
    const welcomeMessage = {
      id: Date.now(), // Уникальный идентификатор
      text: "Привет! Хотите оценить недвижимость?",
      fromUser: false, // Сообщение от бота
      buttons: ["ДА", "НЕТ"] // Кнопки
    };
    setMessages([welcomeMessage]); // Устанавливаем приветственное сообщение при монтировании компонента
  }, []); // Пустой массив зависимостей, чтобы useEffect вызывался только один раз

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: text.trim(),
      fromUser: true
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContent}>
        <div className={styles.messages}>     
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.message} ${msg.fromUser ? styles.userMessage : styles.botMessage}`}>
              <h4 className={styles.chatname}>{msg.fromUser ? "Ты :" : "Бот :"}</h4>
              {msg.text}
              {/* Отображение кнопок */}
              {msg.buttons && (
                <div className={styles.buttons}>
                  {msg.buttons.map((button, index) => (
                    <button key={index} className={styles.buttonYesNo}>
                      {button}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ChatForm onSubmit={sendMessage} />
    </div>
  );
}

export default Chat;
