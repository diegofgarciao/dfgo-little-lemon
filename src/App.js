import './App.css';
import Navbar from './app/NavBar';
import Hero from './app/Hero';
import Highlights from './app/Highlights';
import Testimonials from './app/Testimonials';
import Footer from './app/Footer';
import ReservationForm from './app/ReservationForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
      <ReservationForm />
      <Footer />
      {/* Aquí irán los otros componentes */}
    </div>
  );
}

export default App;
