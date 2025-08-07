import React from 'react';
import './StatsCard.css';
import { Heart, Scale } from 'lucide-react'; // Przykładowe ikony

interface StatsCardProps {
  label: string;
  value: string;
  unit: string;
}

export function StatsCard({ label, value, unit }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="icon-wrapper">
        <Scale size={24} color="#007aff" />
      </div>
      <div className="info">
        <p className="label">{label}</p>
        <p className="value">{value} <span className="unit">{unit}</span></p>
      </div>
    </div>
  );
}