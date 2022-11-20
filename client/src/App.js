import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Bars from './pages/Bars';
import Events from './pages/Events';
import Contact from './pages/Contact';

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
          <Route path='/Bars' element={<Bars/>} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Contact' element={<Contact/>} />

      </Routes>
      <Footer></Footer>
    </div>
      </Router>
  );
}

export default App;
