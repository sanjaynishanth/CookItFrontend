import { Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import About from './Components/About';
import Showreel from './Components/Showreel';
import Services from './Components/Services';
import Mission from './Components/Mission';
import Faq from './Components/Faq';
import Footer from './Components/footer';
import Portfolio from './Pages/Portfolio';
import ContactSection from './Components/Contact';

// Import Link for navigation

function App() {
  return (
      <div className="app-container bg-gray-50">
        <Routes>
          {/* Home Page Route */}
           <Route path="/contact" element={<ContactSection />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Showreel />
                <About /> {/* Set id for About Us section */}
                <Services /> {/* Set id for Services section */}
                <Mission />
                <Faq />
                <Footer /> {/* Footer appears on Home */}
              </>
            }
          />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </div>
  );
}

export default App;
