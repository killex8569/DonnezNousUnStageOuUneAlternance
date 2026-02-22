import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './views/Accueil/Accueil'
import Navbar from './components/Navbar/Navbar'
import './css/App.css'
import Footer from './components/Footer/Footer';
import Competences from './views/Competences/Competences';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Navbar/>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/parcours" element={<h1>Notre parcours</h1>} />
          <Route path="/apropos" element={<h1>A propos</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
