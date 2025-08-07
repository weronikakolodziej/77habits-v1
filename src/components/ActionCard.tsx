import React from 'react';
import './ActionCard.css';
import { ChevronRight } from 'lucide-react'; // Przykład ikony dla web

interface ActionCardProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

export function ActionCard({ title, subtitle, onPress }: ActionCardProps) {
  return (
    <div className="action-card" onClick={onPress}>
      <div className="content">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="arrow">
        <ChevronRight size={24} color="#888" />
      </div>
    </div>
  );
}