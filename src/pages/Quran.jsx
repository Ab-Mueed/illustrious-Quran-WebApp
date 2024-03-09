import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import NavigationSection from "../components/QuranComponents/NavigationSection/NavigationSection";
import DisplayQuranSection from "../components/QuranComponents/DisplayQuranSection/DisplayQuranSection";
import { useState } from "react";
import { themeMode } from "./Root";

function Quran({ props }) {
  const [selectedSurah, setSelectedSurah] = useState("1");
 
 function handleSurahNumber(number){
  setSelectedSurah(number);
 }
  

  return (
    <>
      <Box sx={{backgroundColor:'#fefefe'}}>
        <Grid mt={0} container sx={{}}>
          <Grid
            item
            xs={2}
            sx={{backgroundColor:"#f5f6f8"}}
          >
            <NavigationSection
              onhandleSurahNumber = {handleSurahNumber}
            />
          </Grid>

          <Grid
            item
            xs={10}
            sx={{}}
          >
            <DisplayQuranSection 
            surahNumber = {selectedSurah}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );

}

export default Quran;
