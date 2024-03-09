import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { themeMode } from "../../../pages/Root";

const tempArray = [1, 2, 3, 4, 5, 6];
const URL = "http://api.alquran.cloud/v1/surah";

export let surahNumber;

const NavigationSection = ({ onhandleSurahNumber }) => {
  console.log("In Quran Navigation");
  const [surah, setSurah] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  // -----------------------------------------------

  //......................................................................
  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchSurah = async () => {
        const response = await fetch(`${URL}`);
        const surah = await response.json();
        setSurah(surah);
      };
      fetchSurah();
      setIsLoading(false);
    } catch {
      console.log("Error while fetching data");
    }
  }, []);
  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!surah.data) {
    return (
      <div>
        <h1>No data found</h1>
      </div>
    );
  }
  //-------------------------------------------------------
  // Logic to display the particular verses when selecting a Chapter
  function handleChapterClick(number) {
    onhandleSurahNumber(number);
  }

  return (
    <>
      <Box item xs={12} id="navigation-section" sx={{ width: "17vw", height: "90vh", overflow: "scroll", position: 'fixed' }}>
        {surah.data.map((item, index) => (
          <Button
            key={index}
            sx={{
              width: "100%",
              display: 'flex', gap:5,
              padding: '5px 10px', marginTop: '10px'
            }}
            onClick={() => handleChapterClick(item.number)}
          >
            <Typography variant="body1" sx={{ color: "#00967b" }}>{item.number}</Typography>
            <Box>
              <Typography variant="body1" sx={{ color: "#001017" }}>{item.englishName}</Typography>
              <Typography variant="body1" sx={{ color: "#001017" }}>{item.name}</Typography>
            </Box>


          </Button>
        ))}
      </Box>
    </>
  );
};

export default NavigationSection;
