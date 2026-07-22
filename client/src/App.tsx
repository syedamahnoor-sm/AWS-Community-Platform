import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Events from "./Sections/Events";
import Team from "./Sections/Teams";
import Testimonials from "./Sections/Testimonials";
import JoinCommunity from "./Sections/JoinCommunity";
import Footer from "./Sections/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Team />
      <Testimonials />
      <JoinCommunity />
      <Footer />
    </main>
  );
}

export default App;
