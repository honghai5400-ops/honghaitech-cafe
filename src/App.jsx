import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Stores from './pages/Stores';
import Career from './pages/Career';
import Activities from './pages/Activities';
import SuperCode from './pages/SuperCode';
import About from './pages/About';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingContact from './components/common/FloatingContact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thuc-don" element={<Menu />} />
            <Route path="/cua-hang" element={<Stores />} />
            <Route path="/tuyen-dung" element={<Career />} />
            <Route path="/hoat-dong" element={<Activities />} />
            <Route path="/supercode" element={<SuperCode />} />
            <Route path="/ve-chung-toi" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}


export default App;
