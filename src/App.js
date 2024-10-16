import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import ProfileDtl from './pages/ProfileDtl';
import ProfilePerUser from './pages/ProfilePerUser';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/pages/profile" element={<ProfileDtl />}> </Route>
        <Route exact path="/profile/:id" element={<ProfilePerUser />}> </Route>
        <Route exact path="/pages/about" element={<About />}> </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
