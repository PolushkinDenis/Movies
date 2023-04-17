import React from 'react';
import './scss/app.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Films from './pages/films/Films';
import ContentCard from './pages/contentCard/ContentCrad.tsx';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        {/* <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/films" element={<Films />} />
        </Routes> */}
        <ContentCard />
      </BrowserRouter>
    </div>
  );
}

export default App;
