import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MicIcon from "@mui/icons-material/Mic";
import { Link } from "react-router-dom";
import Quran from "../../../assets/Quran.jpg";
import Quran2 from "../../../assets/Quran2.jpg";
import {themeMode} from '../../../pages/Root.jsx';
import { FirstImageBox, Root, SecondImageBox,FirstBox,FirstButton,SecondButton } from "./introsection.style";

export default function IntroSection() {
  return (
    <Root>
      <FirstImageBox
        component="img"
        sx={{
        }}
        alt="Quran Image"
        src={Quran}
      />
      <SecondImageBox
        component="img"
        sx={{
        }}
        alt="Quran Image"
        src={Quran2}
      />
      <FirstBox>
        <Typography variant="body1" sx={{ color: themeMode.paraColor  }}>
          Welcome to our Quran Reading platform, where you can embark on a
          transformative journey through the sacred text of Islam.
        </Typography>
        <Link to="/Quran">
        <FirstButton
          variant="contained"
          disableElevation
          className="remove-focus-outline"
          endIcon={<AutoStoriesIcon />}
        >
          Read Quran
        </FirstButton>
        </Link>
        <SecondButton
          variant="contained"
          disableElevation
          className="remove-focus-outline"
          endIcon={<MicIcon />}
        >
          Quran Audio
        </SecondButton>

        <Box sx={{ color: "#12372A", display: "flex", direction: "row" }}>
          <Rating name="full-rating" defaultValue={5} readOnly />
          <Typography component="legend" sx={{color:themeMode.paraColor}}>4.5k</Typography>
        </Box>
        <Typography variant="body1" sx={{ color: themeMode.paraColor }}>
          100K+ ratings on Google
        </Typography>
      </FirstBox>
    </Root>
  );
}
