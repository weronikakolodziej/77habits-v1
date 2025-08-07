import React from 'react';
import './WeightChart.css';

export function WeightChart() {
  return (
    <div className="weight-chart-container">
      <p className="chart-title">Wykres Wagi</p>
      {/* Tutaj umieść komponent wykresu, np. <BarChart /> */}
      <div className="placeholder">
        <p>Tutaj będzie wykres wagi</p>
      </div>
    </div>
  );
}