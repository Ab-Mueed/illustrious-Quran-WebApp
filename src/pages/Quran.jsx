import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import NavigationSection from "../components/QuranComponents/NavigationSection/NavigationSection";
import DisplayQuranSection from "../components/QuranComponents/DisplayQuranSection/DisplayQuranSection";
import { useState } from "react";

function Quran({ props }) {
  const [selectedSurah, setSelectedSurah] = useState("1");
 
 function handleSurahNumber(number){
  setSelectedSurah(number);
 }
  

  return (
    <>
      <Box sx={{}}>
        <Grid mt={0} container sx={{}}>
          <Grid
            item
            xs={3}
            sx={{}}
          >
            <NavigationSection
              onhandleSurahNumber = {handleSurahNumber}
            />
          </Grid>

          <Grid
            item
            xs={9}
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
