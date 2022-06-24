import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Pricing, About, Contact, Footer } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
