import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Films from "./pages/films/Films";
import Footer from "./components/footer/Footer";
import Person from "./pages/person/Person";
import Movies from "./pages/movies/Movies";
import ContentPage from "./pages/contentPage/ContentPage";
import ContextFc, { AutoContext } from "./context";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <ContextFc>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Main />} />
            <Route path="/films" element={<Films />} />
            <Route path="/film" element={<ContentPage />} />
            <Route path="/person/:name" element={<Person />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:filter" element={<Movies />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextFc>
    </div>
  );
}

export default App;
