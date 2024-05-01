import React, { useState } from "react";
import { Overlay, Menu } from "./preferenceMenu.style";
import { Typography, TextField, MenuItem, Box, Button } from "@mui/material";


const PreferenceMenu = ({
  onClose,
  onSave,
  translations,
  authors,
  textStyles,
  onTranslationLanguageChange,
}) => {
  const [translationLanguage, setTranslationLanguage] = useState("");
  const [textStyle, setTextStyle] = useState("");
  const [author, setAuthor] = useState("");

  console.log("PreferenceMenu");

  const handleSave = () => {
    onSave({
      translationLanguage,
      textStyle,
      author,
    });
    onClose();
  };

  const handleTranslationLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setTranslationLanguage(selectedLanguage);
    setAuthor(""); // Reset author when language changes
    onTranslationLanguageChange(selectedLanguage); // Notify parent component
  };

  console.log("Authors:", authors);
  console.log("Text Styles:", textStyles);

  return (
    <Overlay>
      <Menu>
        <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
          Preference Selection
        </Typography>
        <TextField
          select
          label="Translation Language"
          value={translationLanguage}
          onChange={handleTranslationLanguageChange}
          fullWidth
          sx={{ mt: 2 }}
        >
          {translations.data.map((translation) => (
            <MenuItem key={translation._id} value={translation._id}>
              {translation._id}
            </MenuItem>
          ))}
          {/* Add more options as needed */}
        </TextField>
        <TextField
          select
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        >
          {authors.data.map((author) => (
            <MenuItem key={author._id} value={author._id}>
              {author._id}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Text Style"
          value={textStyle}
          onChange={(e) => setTextStyle(e.target.value)}
          fullWidth
          sx={{ mt: 2 }}
        >
          {textStyles.data.map((style) => (
            <MenuItem value={style._id} key={style._id}>
              {style._id}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Apply Settings
          </Button>
          <Button variant="outlined" onClick={onClose} sx={{ ml: 2 }}>
            Close
          </Button>
        </Box>
      </Menu>
    </Overlay>
  );
};

export default PreferenceMenu;