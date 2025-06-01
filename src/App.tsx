import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/components/HomePage';
import Navbar from './features/components/Navbar12121';
import InfoPage from './features/components/InfoPage';
import PaymentPage from './features/components/Payment/PaymentPage';





function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




















