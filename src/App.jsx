import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import IntroSection from "./components/IntroSection/IntroSection.jsx";
import Heading from "./components/Heading/Heading.jsx";
import SlantedDiv from "./components/SlantedDiv/SlantedDiv.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";
import { lightMode, darkMode } from "./util/themeScheme.js";

export let themeMode = {};

function App() {
  const [activeTheme, setActiveTheme] = useState("light");

  if (activeTheme === "light") {
    themeMode = { ...lightMode };
  } else {
    themeMode = { ...darkMode };
  }

  function handleThemeChange() {
    setActiveTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  }

  return (
    <div
      style={{
        backgroundColor: themeMode.bodyColor,
        padding: "0px",
        margin: "0px",
        overflow: "hidden",
      }}
    >
      <div style={{ margin: "0 90px" }}>
        <NavBar onClick={handleThemeChange} />
        <Heading variant="h1">Make Self-Purification by Reading Quran</Heading>
        <IntroSection />
      </div>
      <SlantedDiv />
      <div style={{ margin: "0 90px" }}>
        <HeroSection />
        <Heading className="text" variant="h2" margin={200}>
          Start the Journey of Enlightenment
        </Heading>
        <Cards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
