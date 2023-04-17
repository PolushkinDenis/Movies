import React from "react";
import "./scss/app.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Films from "./pages/films/Films";
import Footer from "./components/footer/Footer";
import Movies from "./pages/movies/Movies";
import ContentPage from "./pages/contentPage/ContentPage";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/films" element={<Films />} />
          <Route path="/film" element={<ContentPage />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
