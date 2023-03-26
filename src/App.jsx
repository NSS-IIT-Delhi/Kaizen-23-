import React, {useRef} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import Footer from "./components/Footer/footer";
import Home from "./components/home/home";
import RegisterSuccess from './components/Form/RegisterSuccess';
import EventsPage from './components/EventPage/eventPage'
import AllEvents from './components/AllEvents/AllEvents'
import KaizenForm from "./components/Form/KaizenForm";
import Data from "./components/DataPage/data";
import Team from "./components/Team/Team";
import Sponsers from "./components/Sponsers/Sponsers";

function App() {
  const eventsRef = React.useRef(null)
  const competitionsRef = React.useRef(null)
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar/><Home/></>} />
          <Route path="/events" element={<><Navbar eventsRef={eventsRef} competitionsRef={competitionsRef}/><AllEvents eventsRef={eventsRef} competitionsRef={competitionsRef}/></>} />
          <Route path="/sponsors" element={<><Navbar eventsRef={eventsRef} competitionsRef={competitionsRef}/><Sponsers/></>} />
          <Route path="/registersuccess" element={<><Navbar/><RegisterSuccess/></>} />
          <Route path="/team" element={<><Navbar/><Team/></>} />
          <Route path="/form/:id" element={<><Navbar /><KaizenForm/></>} />
          <Route path="/s0ws_n7ue_mi21s" element={<><Navbar/><Data /></>} />
          <Route path="/:id" element={<><Navbar/><EventsPage/></>} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
