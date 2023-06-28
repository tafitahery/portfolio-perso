import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Portfolio />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
