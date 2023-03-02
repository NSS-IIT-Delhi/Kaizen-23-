import React from 'react'
import './App.css'
import Navbar from "./components/navbar/navbar";
import Footer from './components/Footer/footer';
import Timeline from './components/timeline/timeline';

function App() {
  return (
    <>
       < Navbar />
       <div style={{"min-height":"100vh"}}></div>
      <Timeline/>
      < Footer />
    </>
  );
}

export default App;
