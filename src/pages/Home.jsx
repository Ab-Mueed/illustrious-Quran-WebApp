import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import IntroSection from "../components/HomeComponents/IntroSection/IntroSection.jsx";
import Heading from "../components/HomeComponents/Heading/Heading.jsx";
import SlantedDiv from "../components/HomeComponents/SlantedDiv/SlantedDiv.jsx";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection.jsx";
import Cards from "../components/HomeComponents/Cards/Cards.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Box} from '@mui/material';
import { useEffect, useState } from "react";
// import { lightMode, darkMode } from "../util/themeScheme.js";
import {Root} from './home.style.js';
import {themeMode} from './Root.jsx';

// export let themeMode = {};

function Home() {
  console.log("In Home Page");

 
  // const [activeTheme, setActiveTheme] = useState("light");

  // if (activeTheme === "light") {
  //   themeMode = { ...lightMode };
  // } else {
  //   themeMode = { ...darkMode };
  // }

  // function handleThemeChange() {
  //   setActiveTheme((prev) => {
  //     return prev === "light" ? "dark" : "light";
  //   });
  // }

  return (
    <div
      style={{
        backgroundColor: themeMode.bodyColor,
        padding: "0px",
        margin: "0px",
        overflow: "hidden",
      }}
    >
      <Root>
        {/* <NavBar onClick={handleThemeChange} /> */}
        <Heading variant="h1">Quran For All</Heading>
        <IntroSection />
      </Root>
      <SlantedDiv />
      <Root>
        <HeroSection />
        <Heading className="text" variant="h2" margin={0}>
          Start the Journey of Enlightenment
        </Heading>
        <Cards />
        <Footer />
      </Root>
    </div>
  );
}

export default Home;
