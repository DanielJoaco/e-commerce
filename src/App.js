import './App.css';
import React, { useState } from 'react';
import Header from './componets/header.js';
import Footer from './componets/Footer.js';
import BasicTabs from './componets/utils/Tabs.tsx';
import AboutUs from './componets/aboutUs.js';
import CustomerService from './componets/customerService.js';
import SignIn from './componets/signIn.js';
import SignUp from './componets/signUp.js';

function App() {
  const [currentView, setCurrentView] = useState('tabs');
  const [currentSection, setCurrentSection] = useState(''); 

  const handleNavigation = (page, section = '') => {
    setCurrentView(page);
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} />
      {currentView === 'tabs' && <BasicTabs />}
      {currentView === 'aboutUs' && <AboutUs section={currentSection} />}
      {currentView === 'customerService' && <CustomerService section={currentSection} />}
      {currentView === 'signIn' && <SignIn />}
      {currentView === 'signUp' && <SignUp />}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;
