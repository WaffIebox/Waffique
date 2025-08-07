import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Help from './components/Help.jsx';
import './styles/App.css';
import './styles/index.css';
import Home from './pages/Home.jsx';
import Portfolios from './pages/Portfolios.jsx';
import Websites from './pages/Websites.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (

    <Router>
      
      <div>
      
        {/* <Help></Help> */}
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

        </Routes>

        <Footer />

      </div>


    </Router>
  );
}


export default App;
