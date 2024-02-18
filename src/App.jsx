import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import Heading from "./components/Heading";
import SlantedDiv from "./components/SlantedDiv";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <div style={{ margin: "0 100px" }}>
        <NavBar />
        <Heading variant="h1">Make Self-Purification by Reading Quran</Heading>
        <IntroSection />
      </div>
      <SlantedDiv />
      <div style={{ margin: "0 100px" }}>
        <HeroSection />
        <Heading className="text" variant="h2" margin={200}>
          Start the Journey of Enlightenment
        </Heading>
      </div>
    </>
  );
}

export default App;
