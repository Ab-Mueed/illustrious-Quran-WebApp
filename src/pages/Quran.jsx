import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import NavigationSection from "../components/QuranComponents/NavigationSection/NavigationSection";
import DisplayQuranSection from "../components/QuranComponents/DisplayQuranSection/DisplayQuranSection";
import PreferenceMenu from "../components/PreferenceMenu/PreferenceMenu";
import { useState, useEffect } from "react";
import { themeMode } from "./Root";

function Quran({ props }) {
  const [selectedSurah, setSelectedSurah] = useState("1");
  const [showPreference, setShowPreference] = useState(false);
  const [translations, setTranslations] = useState([]);
  const [author, setAuthors] = useState([]);
  const [textStyles, setTextStyles] = useState([]);




  const [preferences, setPreferences] = useState({
    translationLanguage: "",
    textStyle: "",
    author: "",
  });

  useEffect(() => {
    fetchTranslations();
    fetchAuthors();
    fetchTextStyles();
  }, []);

  const fetchTranslations = async () => {
    try {
      const response = await fetch(
        "https://illustriousquran-backend.onrender.com/v1/scripture/quraan/info/languages"
      );
      const data = await response.json();
      setTranslations(data);
      console.log("Translations:", data);
    } catch (error) {
      console.error("Error fetching translations:", error);
    }
  };
  // fetchTranslations();

  const fetchAuthors = async () => {
    try {
      const availableLanguage = 'en';
      const response = await fetch(
        `https://illustriousquran-backend.onrender.com/v1/scripture/quraan/info/authorsForLanguage?language=${availableLanguage}`
      );
      const data = await response.json();
      setAuthors(data);
      console.log("Authors:", data);
    } catch (error) {
      console.error("Error fetching Authors:", error);
    }
  };

  const fetchTextStyles = async () => {
    try {
      const response = await fetch(
        "https://illustriousquran-backend.onrender.com/v1/scripture/quraan/info/arabicText"
      );
      const data = await response.json();
      setTextStyles(data);
      console.log("textStyles:", data);
    } catch (error) {
      console.error("Error fetching text styles:", error);
    }
  };

  function handleSurahNumber(number) {
    setSelectedSurah(number);
  }

  const handleOpenPreference = () => {
    setShowPreference(true);
  };

  const handleClosePreference = () => {
    setShowPreference(false);
  };

  const handleSavePreference = (settings) => {
    // Implement logic to update Qur'an page with selected preferences
    setPreferences(settings);
    console.log("preferences Updated:", settings);
    handleClosePreference();
  };

  return (
    <>
      <Box sx={{ backgroundColor: themeMode.quranPageBgColor }}>
        <Grid mt={0} container sx={{}}>
          <Grid item xs={2.5} sx={{}}>
            <NavigationSection onhandleSurahNumber={handleSurahNumber} />
          </Grid>

          <Grid item xs={9.5} sx={{}}>
            <DisplayQuranSection
              surahNumber={selectedSurah}
              onOpenPreferenceMenu={handleOpenPreference}
              preferences={preferences}
            />
          </Grid>
        </Grid>
        {showPreference && (
          <PreferenceMenu
            onClose={handleClosePreference}
            onSave={handleSavePreference}
            translations={translations}
            authors={author}
            textStyles={textStyles}
          />
        )}
      </Box>
    </>
  );
}

export default Quran;