import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './KnowledgeScreen.css';

export default function KnowledgeScreen() {
  const navigate = useNavigate();

  return (
    <div className="knowledge-screen-container">
      <header className="header">
        <button onClick={() => navigate('/')} className="back-button">
          <ArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="title">Baza Wiedzy</h1>
      </header>

      <section className="article-list">
        <p className="placeholder">
          Tutaj pojawi się lista artykułów z bazy wiedzy.
        </p>
      </section>
    </div>
  );
}