import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundScreen.css';

export default function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1 className="status-code">404</h1>
      <p className="message">Strona nie została znaleziona.</p>
      <button onClick={() => navigate('/')} className="home-button">
        Wróć do strony głównej
      </button>
    </div>
  );
}
