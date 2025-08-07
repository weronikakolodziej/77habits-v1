import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexScreen from './screens/IndexScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScannerScreen from './screens/ScannerScreen';
import KnowledgeScreen from './screens/KnowledgeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/scanner" element={<ScannerScreen />} />
        <Route path="/knowledge" element={<KnowledgeScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;