// import WeatherService from './components/API/WeatherServiceAPI';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DayPage from './components/Pages/DayPage';
import WeekPage from './components/Pages/WeekPage';

// Тут только рефы для путей
// Сами ссылки /two могут использоваться в тегах !!!<Link to="/two"/>!!! на других страницах

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