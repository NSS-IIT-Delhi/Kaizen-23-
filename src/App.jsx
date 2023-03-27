import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import Footer from "./components/Footer/footer";
import Home from "./components/home/home";
import RegisterSuccess from "./components/Form/RegisterSuccess";
import EventsPage from "./components/EventPage/eventPage";
import AllEvents from "./components/AllEvents/AllEvents";
import KaizenForm from "./components/Form/KaizenForm";
import Data from "./components/DataPage/data";
import Team from "./components/Team/Team";
import Loader from "./components/Loader/Loader";
import Sponser from "./components/SponsersP/Sponser";
import Blog from "./components/Blog/Blog";

function App() {
  const eventsRef = React.useRef(null);
  const competitionsRef = React.useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");

    let imagesLoadedCount = 0;

    if (images.length === 0) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 5000);
      return;
    }

    function handleImageLoad() {
      imagesLoadedCount++;
      if (imagesLoadedCount === images.length) {
        setIsLoaded(true);
      }
    }

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  console.log(isLoaded);

  return (
    <>
      {!isLoaded && <Loader />}
      {isLoaded && (
        <>
          (
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Home />
                  </>
                }
              />
              <Route
                path="/events"
                element={
                  <>
                    <Navbar
                      eventsRef={eventsRef}
                      competitionsRef={competitionsRef}
                    />
                    <AllEvents
                      eventsRef={eventsRef}
                      competitionsRef={competitionsRef}
                    />
                  </>
                }
              />
              <Route
                path="/registersuccess"
                element={
                  <>
                    <Navbar />
                    <RegisterSuccess />
                  </>
                }
              />
              <Route
                path="/team"
                element={
                  <>
                    <Navbar />
                    <Team />
                  </>
                }
              />
              <Route
                path="/sponsor"
                element={
                  <>
                    <Navbar />
                    <Sponser />
                  </>
                }
              />
              <Route
                path="/form/:id"
                element={
                  <>
                    <Navbar />
                    <KaizenForm />
                  </>
                }
              />
              <Route
                path="/s0ws_n7ue_mi21s"
                element={
                  <>
                    <Navbar />
                    <Data />
                  </>
                }
              />
              <Route
                path="/:id"
                element={
                  <>
                    <Navbar />
                    <EventsPage />
                  </>
                }
              />
            </Routes>
          </Router>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
