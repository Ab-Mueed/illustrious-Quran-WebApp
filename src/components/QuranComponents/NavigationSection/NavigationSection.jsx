import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { themeMode } from "../../../pages/Root";

const tempArray = [1, 2, 3, 4, 5, 6];
const URL = "https://illustriousquran-backend.onrender.com/v1/scripture/chapterMetaData/all";

export let surahNumber;

const NavigationSection = ({ onhandleSurahNumber }) => {
  // console.log("In Quran Navigation");
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
      <Box
        item
        xs={12}
        id="navigation-section"
        px={1}
        sx={{
          width: "19vw",
          height: "90vh",
          overflow: "scroll",
          position: "fixed",
        }}
      >
        {surah.data.map((item, index) => (
          <Button
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              gap: 8,
              padding: "5px 10px",
              marginTop: "15px",
              justifyContent: "start",
              borderRadius: 1,
              backgroundColor: themeMode.surahButtonBgColor,
            }}
            onClick={() => handleChapterClick(item.chapter)}
          >
            <Box
              sx={{
                color: themeMode.surahIdColor,
                backgroundColor: themeMode.surahIdBgColor,
                padding:'2px 12px',
                borderRadius: '0px 5px 5px 0px',
              }}
            >
              <Typography variant="body1" sx={{fontSize:'10px'}}>
                {item.chapter}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ color: themeMode.surahEnglishNameColor, fontSize:'13px' }}>
                {item.name}
              </Typography>
              <Typography variant="body1" sx={{ color: themeMode.surahArabicNameColor, fontSize:'13px' }}>
                {item.arabicName}
              </Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default NavigationSection;
