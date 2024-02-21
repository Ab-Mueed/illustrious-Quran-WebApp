import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MicIcon from "@mui/icons-material/Mic";
import Quran from "../../assets/Quran.jpg";
import Quran2 from "../../assets/Quran2.jpg";
import {themeMode} from '../../App';

export default function IntroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        background: themeMode.introBgColor,
        gap: 5,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        component="img"
        sx={{
          height: 380,
          width: 350,
          borderRadius: 3,
        }}
        alt="Quran Image"
        src={Quran}
      />
      <Box
        component="img"
        sx={{
          height: 380,
          width: 350,
          borderRadius: 3,
        }}
        alt="Quran Image"
        src={Quran2}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body1" sx={{ color: themeMode.paraColor  }}>
          Welcome to our Quran Reading platform, where you can embark on a
          transformative journey through the sacred text of Islam.
        </Typography>
        <Button
          variant="contained"
          disableElevation
          className="remove-focus-outline"
          endIcon={<AutoStoriesIcon />}
          sx={{ borderRadius: 6, width: '15vw', background: themeMode.buttonBgColor1, color:themeMode.buttonTextColor1 }}
        >
          Read Quran
        </Button>
        <Button
          variant="contained"
          disableElevation
          className="remove-focus-outline"
          endIcon={<MicIcon />}
          sx={{ borderRadius: 6, width: '15vw', background: themeMode.buttonBgColor2, color:themeMode.buttonTextColor2 }}
        >
          Quran Audio
        </Button>

        <Box sx={{ color: "#12372A", display: "flex", direction: "row" }}>
          <Rating name="full-rating" defaultValue={5} readOnly />
          <Typography component="legend" sx={{color:themeMode.paraColor}}>4.5k</Typography>
        </Box>
        <Typography variant="body1" sx={{ color: themeMode.paraColor }}>
          100K+ ratings on Google
        </Typography>
      </Box>
    </Box>
  );
}
