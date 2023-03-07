import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import Footer from "./components/Footer/footer";
import Home from "./components/home/home";
import RegisterSuccess from './components/Form/RegisterSuccess';
import EventsPage from './components/EventPage/eventPage'
import AllEvents from './components/AllEvents/AllEvents'
import KaizenForm from "./components/Form/KaizenForm";
import Team from './components/Team/Team'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<AllEvents/>} />
          <Route path="/registersuccess" element={<RegisterSuccess/>} />
          <Route path="/form/:id" element={<KaizenForm />} />
          <Route path="/:id" element={<EventsPage/>} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
