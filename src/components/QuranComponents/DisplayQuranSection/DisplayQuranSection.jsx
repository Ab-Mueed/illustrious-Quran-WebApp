import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import EditNoteIcon from '@mui/icons-material/EditNote';
import React from "react";
import { useState, useEffect } from "react";
import { themeMode } from "../../../pages/Root";

const VERSE_URL = "http://api.alquran.cloud/v1/surah/";

const DisplayQuranSection = ({ surahNumber }) => {
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
        <Typography sx={{ textAlign: "center", color: '#00967b' }} variant="h3">
          {verse.data.name}
        </Typography>
        {verse.data.ayahs.map((item) => (
          <>
            <Grid container px={2}  my={2} sx={{}}>
              <Grid item xs={2}>
                <Stack sx={{ width: 100 }} spacing={1}>
                  <Button className="remove-focus-outline" sx={{ color: 'grey' }} >
                    <EditNoteIcon />
                  </Button>
                  <Button className="remove-focus-outline" sx={{ color: 'grey' }}>
                    <ImportContactsIcon />
                  </Button>
                  <Button className="remove-focus-outline" sx={{ color: 'grey' }}>
                    <PlayArrowIcon />
                  </Button>
                  <Button className="remove-focus-outline" sx={{ color: 'grey' }}>
                    <BookmarkIcon />
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={10} py={5}>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "right", color: '#001017', fontWeight:'bold' }}
                >
                  {item.text}
                </Typography>
              </Grid>
            </Grid>
            <Divider
              sx={{ backgroundColor: "grey" }}
              orientation="horizontal"
            />
          </>
        ))}
      </Box>


    </>
  );
};

export default DisplayQuranSection;
