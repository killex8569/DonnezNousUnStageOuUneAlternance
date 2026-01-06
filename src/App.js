import Accueil from './views/Accueil/Accueil';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Accueil/>
      <Footer/>
    </>
  );
}

export default App;
