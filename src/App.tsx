import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import Person from "./pages/person/Person";
import Movies from "./pages/movies/Movies";
import ContentPage from "./pages/contentPage/ContentPage";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/film" element={<ContentPage />} />
          <Route path="/person/:name" element={<Person />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
