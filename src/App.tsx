/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CONSTANT from './utils/constants/index';
import Home from './pages/Home/Home';
import Header from './components/shared/header/Header';
// import Footer from './components/shared/footer/Footer';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';

function App() {
  console.log('[Env]', CONSTANT.API_URL);

  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
