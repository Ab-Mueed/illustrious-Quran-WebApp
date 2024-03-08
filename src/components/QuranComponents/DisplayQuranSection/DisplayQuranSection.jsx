import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

const VERSE_URL = "http://api.alquran.cloud/v1/surah/";

const DisplayQuranSection = ({surahNumber}) => {
  const [verse, setVerse] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  console.log(surahNumber);
  //......................................................................
  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchVerse = async () => {
        const response = await fetch(`${VERSE_URL}${surahNumber}`);
        const verse = await response.json();
        setVerse(verse);
      };
      fetchVerse();
      setIsLoading(false);
    } catch {
      console.log("Error while fetching data");
    }
  }, [surahNumber]);

  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!verse.data) {
    return (
      <div>
        <h1>No data found</h1>
      </div>
    );
  }

  return (
    <>
      <Box my={2}>
        <Typography sx={{ textAlign: "center" }} variant="h3">
          {verse.data.name}
        </Typography>
        {verse.data.ayahs.map((item) => (
          <Box mx={2} my={5} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              paddingBottom={10}
              sx={{ textAlign: "right" }}
            >
              {item.text}
            </Typography>
            <Divider
              sx={{ backgroundColor: "white", border: 1.5 }}
              orientation="horizontal"
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default DisplayQuranSection;
