import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Programs from './Programs/Programs.jsx';
import Reasons from './Reasons/Reasons.jsx'
import Plans from './Plans/Plans.jsx'
import Testimonials from './Testimonial/Testimonials.jsx'
import Join from './Join/Join.jsx'
import Footer from './Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
