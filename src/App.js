import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DayPage from './components/Pages/DayPage';
import WeekPage from './components/Pages/WeekPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<WeekPage />} />
        <Route path="two" element={<DayPage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;