import React, { useEffect, useState, useRef } from 'react';
import styles from './style.module.css';

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const ForgotPasswordComponent = ({ setSelect }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleClickOutside = (e) => {
    if (!formRef.current.contains(e.target) && e.target.id !== 'buttt') {
      setShowForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const sendResetPasswordEmail = async () => {
    try {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValidEmail) {
        setError('כתובת דוא"ל לא חוקית');
        return;
      }
      setError('');
      setShowForm(false);

      const response = await fetch('YOUR_EMAIL_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const errorMessage = await response.text();
      if (!response.ok) {
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError('אירעה שגיאה בעת שליחת האימייל');
    }
  };

  const handleToggleForm = () => {
    setError('');
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendResetPasswordEmail();
  };

  return (
    <div className={styles.forgotPassword}>
      {!showForm ? (
        <button id="buttt" className={styles.forgotPasswordButton} onClick={handleToggleForm}>
          שכחת סיסמא ?
        </button>
      ) : (
        <div ref={formRef}>
          <h1>שכחת סיסמה?</h1>
          <p>נא הזן את כתובת הדוא"ל שלך ונשלח לך קישור לאיפוס הסיסמה.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={'כתובת דוא"ל'}
            />
            <input type="submit" value="שלח" />
          </form>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordComponent;
