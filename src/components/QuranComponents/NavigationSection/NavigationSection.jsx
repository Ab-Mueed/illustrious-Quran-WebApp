import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";

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
      <Box item xs={12} sx={{ width:"25vw", height: "90vh", overflow: "scroll", position:'fixed'}}>
        {surah.data.map((item, index) => (
          <Button
            key={index}
            variant="text"
            sx={{
              width: "100%",
              border: "1px solid lightgrey",
              color: "white",
            }}
            onClick={() => handleChapterClick(item.number)}
          >
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Typography variant="body1">{item.number}</Typography>
              <Typography variant="body1">{item.englishName}</Typography>
              <Typography variant="body1">{item.name}</Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default NavigationSection;
