import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Films from './pages/films/Films';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<Main />} />
        <Route path='/films' element={<Films />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
