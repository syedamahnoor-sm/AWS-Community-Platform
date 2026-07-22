import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Events from "./Sections/Events";
import Team from "./Sections/Teams";
import Testimonials from "./Sections/Testimonials";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <Testimonials />
    </main>
  );
}

export default App;
