import { Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import About from './Components/About';
import Showreel from './Components/Showreel';
import Services from './Components/Services';
import Mission from './Components/Mission';
import Faq from './Components/Faq';
import Footer from './Components/footer';
import ContactUs from './Components/Contact';

// Import Link for navigation

function App() {
  return (
    <div className="app-container bg-gray-50">
      <Routes>
        {/* Home Page Route */}
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

        {/* Contact Page Route */}
        <Route
          path="/contact"
          element={
            <>
              <ContactUs />
              {/* <Footer /> */}
               {/* Footer appears on Contact page */}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
