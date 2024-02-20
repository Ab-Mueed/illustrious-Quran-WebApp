import { Box, Typography, Button } from "@mui/material";
import Quran3 from "../assets/Quran3.jpg";
import {themeMode} from '../App';

export default function HeroSection() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop:25, gap:10, marginBottom:5 }}>
      <Box
        component="img"
        sx={{
          height: 450,
          width: 500,
          borderRadius: 3,
        }}
        alt="Quran Image"
        src={Quran3}
      />
      <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
        <Typography variant="h2" sx={{color:themeMode.headingColor, fontWeight:'bold'}}>
          Your Source of Divine Guidance and Wisdom
        </Typography>

        <Typography variant="body1" sx={{color:themeMode.paraColor}} align='justify'>
          The Quran is not just a book; it is the ultimate source of guidance
          for millions of people around the world.
        </Typography>

        <Typography variant="body1" sx={{color:themeMode.paraColor}} align='justify'>
          <span>Revealed over 1,400 years ago,</span> the Quran is a timeless
          and universal scripture that offers profound insights into the human
          condition, ethics, spirituality, and the nature of the universe. It is
          the word of <span> Allah</span>, as conveyed to humanity through the{" "}
          <span> Prophet Muhammad </span> (peace be upon him).
        </Typography>

        <Button
          variant="contained"
          className="remove-focus-outline"
          sx={{ borderRadius: 6, width: 200, background: themeMode.buttonBgColor2, color:themeMode.buttonTextColor1 }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
