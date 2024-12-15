import './App.css';
import Header from './componets/header.js';
import Footer from './componets/Footer.js';
import BasicTabs from './componets/utils/Tabs.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <BasicTabs />
      <Footer />
    </div>
  );
}

export default App;
