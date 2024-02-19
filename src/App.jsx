import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./components/NavBar.jsx";
import IntroSection from "./components/IntroSection.jsx";
import Heading from "./components/Heading.jsx";
import SlantedDiv from "./components/SlantedDiv.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div style={{ margin: "0 90px" }}>
        <NavBar />
        <Heading variant="h1">Make Self-Purification by Reading Quran</Heading>
        <IntroSection />
      </div>
      <SlantedDiv />
      <div style={{ margin: "0 90px" }}>
        <HeroSection />
        <Heading className="text" variant="h2" margin={200}>
          Start the Journey of Enlightenment
        </Heading>
        <Cards/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
