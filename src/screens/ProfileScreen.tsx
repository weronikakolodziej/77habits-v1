import React from 'react';
import './ProfileScreen.css';
import { StatsCard } from '../components/StatsCard';
import { AchievementCard } from '../components/AchievementCard';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="profile-screen-container">
      <header className="header">
        <button onClick={() => navigate('/')} className="back-button">
          <ArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="title">Mój Profil</h1>
      </header>

      <section className="section">
        <h2 className="section-title">Statystyki</h2>
        <StatsCard label="Waga" value="85" unit="kg" />
        <StatsCard label="BMI" value="25.5" unit="" />
        {/* Tutaj możesz dodać więcej statystyk */}
      </section>

      <section className="section">
        <h2 className="section-title">Osiągnięcia</h2>
        <AchievementCard
          title="Pierwsze Kroki"
          description="Zarejestruj się w aplikacji."
          unlocked={true}
        />
        <AchievementCard
          title="Zdobywca"
          description="Zeskanuj 10 produktów."
          unlocked={false}
        />
      </section>
    </div>
  );
}