import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React from "react";
import { useState, useEffect } from "react";
import { themeMode } from "../../../pages/Root";

const VERSE_URL = "http://api.alquran.cloud/v1/surah/";

const DisplayQuranSection = ({ surahNumber }) => {
  const [verse, setVerse] = useState([]);
  const [translation, setTranslation] = useState([]);
  const [inputAudio, setAudio] = useState([]);
  const [isPlaying, setPlaying] = useState(false);

  const [isloading, setIsLoading] = useState(false);
  //   console.log(surahNumber);
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
  //   ---------------TRANSLATION---------------------
  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchTranslation = async () => {
        const response = await fetch(
          `${VERSE_URL}${surahNumber}/editions/en.asad`
        );
        const translation = await response.json();
        setTranslation(translation);
      };
      fetchTranslation();
      setIsLoading(false);
    } catch {
      console.log("Error while fetching data");
    }
  }, [surahNumber]);
  console.log(translation);

  // -------------AUDIO--------------------------------

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchAudio = async () => {
        const response = await fetch(`${VERSE_URL}${surahNumber}/ar.alafasy`);
        const inputAudio = await response.json();
        setAudio(inputAudio);
      };
      fetchAudio();
      setIsLoading(false);
    } catch {
      console.log("Error while fetching data");
    }
  }, [surahNumber]);
  console.log(inputAudio);

  // ---------------------------------------------

  async function handleAudio(index) {
    let playing = isPlaying;
    console.log("At the Beginning " + playing);
    let audioUrl = inputAudio.data.ayahs[index].audio;
    let sound = new Audio(audioUrl);
    if (playing) {
      sound.pause();
    } else {
      setPlaying((prev) => !prev);
      await sound.play();
      console.log("after Await " + isPlaying);
    }
    console.log("Before setPlaying " + playing);
    setPlaying((prev) => !prev);
    console.log("After setPlaying " + playing);
  }

  // -------------Getting Index-------------------------

  // ----------------------------------------------

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
        <Typography
          sx={{ textAlign: "center", color: themeMode.surahHeadingColor }}
          variant="h3"
        >
          {verse.data.name}
        </Typography>
        {verse.data.ayahs.map((item, index) => (
          <>
            <Grid container px={2} my={2} sx={{}}>
              <Grid item xs={2}>
                <Stack sx={{ width: 100 }} spacing={1}>
                  <Button
                    className="remove-focus-outline"
                    sx={{ color: themeMode.displayQuranIconColor }}
                  >
                    <EditNoteIcon />
                  </Button>
                  <Button
                    className="remove-focus-outline"
                    sx={{ color: themeMode.displayQuranIconColor }}
                  >
                    <ImportContactsIcon />
                  </Button>
                  <Button
                    onClick={() => handleAudio(index)}
                    className="remove-focus-outline"
                    sx={{ color: themeMode.displayQuranIconColor }}
                  >
                    <PlayArrowIcon />
                  </Button>
                  <Button
                    className="remove-focus-outline"
                    sx={{ color: themeMode.displayQuranIconColor }}
                  >
                    <BookmarkIcon />
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={10} py={5}>
                <Stack spacing={4}>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "right",
                      color: themeMode.surahVersesColor,
                      fontWeight: "bold",
                    }}
                  >
                    {item.text}
                    <span
                      style={{
                        fontSize: "10px",
                        padding: "7px 10px",
                        backgroundColor: themeMode.versesTerminatorColor,
                        borderRadius: "30px",
                        borderColor: "black",
                      }}
                    >
                      {item.number}
                    </span>
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ color: themeMode.translationColor }}
                  >
                    {translation.data[0].ayahs[index].text}
                  </Typography>
                </Stack>
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
