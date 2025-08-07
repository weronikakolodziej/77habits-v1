import React from 'react';
import './NoteCard.css';

interface NoteCardProps {
  note: string;
  timestamp: string;
}

export function NoteCard({ note, timestamp }: NoteCardProps) {
  return (
    <div className="note-card">
      <p className="note-text">{note}</p>
      <p className="note-timestamp">{timestamp}</p>
    </div>
  );
}