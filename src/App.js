import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
