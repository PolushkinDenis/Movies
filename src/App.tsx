import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Footer from "./components/footer/Footer";
import Person from "./pages/person/Person";
import Movies from "./pages/movies/Movies";
import ContentPage from "./pages/contentPage/ContentPage";
import ContextFc, {AutoContext} from "./context/index";
import ProfileForm from "./pages/profileForm/ProfileForm";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./scss/app.scss";
import "./scss/swiper.navigation.css"

function App() {
  return (
    <div className="wrapper">
      <ContextFc>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/film" element={<ContentPage/>}/>
            <Route path="/person/:name" element={<Person/>}/>
            <Route path="/movies" element={<Movies/>}>
              <Route path="/movies/:filter?/:filter?/" element={<Movies/>}/>
              <Route
                path="/movies/filter/:filter?/:filter?/"
                element={<Movies/>}
              />
              <Route path="/movies/all" element={<Movies/>}/>
            </Route>
            <Route path="/login" element={<ProfileForm/>}/>
            <Route path="/registration" element={<ProfileForm/>}/>
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Footer/>
        </BrowserRouter>
      </ContextFc>
    </div>
  );
}

export default App;
