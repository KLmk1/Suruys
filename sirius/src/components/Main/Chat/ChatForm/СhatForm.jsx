import React, { useState } from 'react';
import styles from './ChatForm.module.scss';

function ChatForm({ onSubmit }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;
    onSubmit(inputText);
    setInputText('');
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    // Если нажата клавиша Enter и не нажата клавиша Shift
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Предотвращаем стандартное действие по нажатию Enter (переход на новую строку)
      handleSubmit(e); // Вызываем обработчик для отправки сообщения
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.chatForm}>
      <div className={styles.inputContainer}>
        <textarea
          value={inputText}
          onChange={handleChange} // Обрабатываем изменение текста в поле ввода
          onKeyDown={handleKeyDown} // Обрабатываем нажатие клавиши
          placeholder="Ваш запрос..."
          className={styles.input}
        />
        <button type="submit" className={`${styles.sendButton} ${styles.active}`}>
          <img className={styles.sendimg} src='send.png' /> 
        </button>
      </div>
    </form>
  );
}

export default ChatForm;
  