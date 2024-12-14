import './App.css';
import Header from './componets/header.js';
import Footer from './componets/Footer.js';
import BasicTabs from './componets/utils/Tabs.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
          <Header />
      </header>
      <BasicTabs />
      <footer>
          <Footer />
      </footer>
    </div>
  );
}

export default App;
