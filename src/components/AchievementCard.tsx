import React from 'react';
import './AchievementCard.css';
import { Award } from 'lucide-react'; // Przykład ikony

interface AchievementCardProps {
  title: string;
  description: string;
  unlocked: boolean;
}

export function AchievementCard({ title, description, unlocked }: AchievementCardProps) {
  return (
    <div className={`achievement-card ${unlocked ? 'unlocked' : 'locked'}`}>
      <div className="icon-container">
        <Award size={32} color={unlocked ? '#FFD700' : '#888'} />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}