import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Events from "./Sections/Events";
import Team from "./Sections/Teams";
import Testimonials from "./Sections/Testimonials";
import JoinCommunity from "./Sections/JoinCommunity";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <Testimonials />
      <JoinCommunity />
    </main>
  );
}

export default App;
