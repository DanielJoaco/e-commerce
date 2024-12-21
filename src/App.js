import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import BasicTabs from './components/utils/Tabs.js';
import AboutUs from './components/aboutUs.js';
import CustomerService from './components/customerService.tsx';
import SignIn from './components/signIn.js';
import SignUp from './components/signUp.js';
import ViewProduct from './components/viewProducts';
import SearchResults from "./components/searchResults.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<BasicTabs />} />
          <Route path="/e-commerce" element={<BasicTabs />} />
          <Route path="/tabs" element={<BasicTabs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/customerService" element={<CustomerService />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/product/:name" element={<ViewProduct />} /> {/* Cambia id por nombre */}
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
