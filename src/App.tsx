import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { VibeWebCoder } from './components/VibeWebCoder';
import { GamingProfile } from './components/GamingProfile';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-black">
      <Navigation />
      <Hero />
      <Projects />
      <VibeWebCoder />
      <GamingProfile />
      <Contact />
    </div>
  );
}

export default App;
