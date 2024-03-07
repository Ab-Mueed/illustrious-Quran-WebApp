import { useState } from "react";
import { Outlet } from "react-router-dom"
import NavBar from '../components/NavBar/NavBar'

import { lightMode, darkMode } from "../util/themeScheme";

export let themeMode = {};

const Root = ({onHit}) => {
  const [activeTheme, setActiveTheme] = useState("light");

  if (activeTheme === "light") {
    themeMode = { ...lightMode };
  } else {
    themeMode = { ...darkMode }
  }

  function handleThemeChange() {
    setActiveTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
    onHit()
  }

  return (
    <>
      <NavBar onClick={handleThemeChange}/>
      <Outlet />
    </>
  )
}

export default Root