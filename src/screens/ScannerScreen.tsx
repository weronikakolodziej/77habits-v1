import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ScannerScreen.css';

export default function ScannerScreen() {
  const navigate = useNavigate();

  return (
    <div className="scanner-screen-container">
      <header className="header">
        <button onClick={() => navigate('/')} className="back-button">
          <ArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="title">Skaner</h1>
      </header>

      <div className="camera-view">
        <p>Miejsce na podgląd kamery</p>
      </div>

      <p className="instruction">
        Skieruj aparat na kod kreskowy, aby zeskanować produkt.
      </p>
    </div>
  );
}