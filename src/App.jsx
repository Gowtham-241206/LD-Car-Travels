import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Routes from './components/Routes';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Routes />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
