import React from 'react';
import { ActionCard } from '../components/ActionCard';
import { NoteCard } from '../components/NoteCard';
import { useNavigate } from 'react-router-dom';
import './IndexScreen.css'; // Ten import jest kluczowy

export default function IndexScreen() {
  const navigate = useNavigate();

  const handleScannerPress = () => {
    navigate('/scanner');
  };

  const handleKnowledgePress = () => {
    navigate('/knowledge');
  };

  return (
    <div className="index-screen-container">
      <header className="header">
        <h1 className="title">Witaj! 👋</h1>
        <p className="subtitle">Twój codzienny dashboard</p>
      </header>

      <section className="section">
        <h2 className="section-title">Akcje</h2>
        <ActionCard
          title="Skaner"
          subtitle="Skanuj nowe przedmioty"
          onPress={handleScannerPress}
        />
        <ActionCard
          title="Baza wiedzy"
          subtitle="Przeglądaj artykuły"
          onPress={handleKnowledgePress}
        />
      </section>

      <section className="section">
        <h2 className="section-title">Notatki</h2>
        <NoteCard
          note="Dzisiaj wykonałem 30 minut ćwiczeń kardio."
          timestamp="2025-08-06"
        />
      </section>
    </div>
  );
}