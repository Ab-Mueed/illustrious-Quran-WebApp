import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";

const tempArray = [1, 2, 3, 4, 5, 6];
const URL = "http://api.alquran.cloud/v1/surah";

const NavigationSection = () => {
  console.log('In Quran Navigation');
  const [surah, setSurah] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true)
      const fetchSurah = async () => {
        const response = await fetch(`${URL}`);
        const surah = await response.json();
        setSurah(surah);
      };
      fetchSurah()
      setIsLoading(false)
    } catch {
      console.log('Error while fetching data');
    }
  }, []);
  
  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(!surah.data) {
    return (
      <div>
        <h1>No data found</h1>
      </div>
    )
  }

  return (
    <>
      {surah.data.map((item, index) => (
        <Grid item  xs={12} key={index}>
          <Button
            variant="text"
            sx={{ width: "100%", border: '1px solid lightgrey'}}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography variant="body1">{item.number}</Typography>
              <Typography variant="body1">{item.englishName}</Typography>
              <Typography variant="body1">{item.name}</Typography>
            </Box>
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default NavigationSection;
