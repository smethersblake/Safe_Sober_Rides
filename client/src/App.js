import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Babes from './pages/Bars/Babes';
import CaptainBlacks from './pages/Bars/CaptainBlacks';
import DoubleWide from './pages/Bars/DoubleWide';
import BullseyeSaloon from './pages/Bars/BullseyeSaloon';
import TheSmilinMoose from './pages/Bars/TheSmilinMoose';
import HudsonTap from './pages/Bars/HudsonTap';

function App() {
  return (
    <Router>

    <div className='flex flex-col min-h-screen bg-slate-200'>
      <header>
      <Nav/>
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/About' element={<About/>} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Babes' element={<Babes />} />
          <Route path='/Captain-Blacks' element={<CaptainBlacks />} />
          <Route path='/Double-Wide' element={<DoubleWide />} />
          <Route path='/Bullseye-Saloon' element={<BullseyeSaloon />} />
          <Route path='/The-Smilin-Moose' element={<TheSmilinMoose />} />
          <Route path='/Hudson-Tap' element={<HudsonTap/>} />

      </Routes>
      <Footer></Footer>
    </div>
      </Router>
  );
}

export default App;
