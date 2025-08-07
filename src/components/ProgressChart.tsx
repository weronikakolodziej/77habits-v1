import React from 'react';
import './ProgressChart.css';

export function ProgressChart() {
  return (
    <div className="progress-chart-container">
      <p className="chart-title">Wykres Postępu</p>
      {/* Tutaj umieść komponent wykresu, np. <LineChart /> */}
      <div className="placeholder">
        <p>Tutaj będzie wykres postępu</p>
      </div>
    </div>
  );
}