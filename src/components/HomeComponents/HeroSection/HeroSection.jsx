import { Box, Typography, Button } from "@mui/material";
import Quran3 from "../../../assets/Quran3.jpg";
import {themeMode} from '../../../pages/Root.jsx';
import {
  FirstImageBox,
  CustomTypography,
  CustomParagraph,
  FirstBox,
  FirstButton,
  Root
} from "./heroSection.style";

export default function HeroSection() {
  return (
    <Root
    sx={{
      display: "flex",
      justifyContent: "space-between",
      marginTop: 25,
      gap: 10,
      marginBottom: 5,
      flexWrap:'wrap',
      paddingTop:1,
    }}>
      <FirstImageBox component="img" sx={{}} alt="Quran Image" src={Quran3} />
      <FirstBox>
        <CustomTypography
          variant="h2"
          sx={{ color: themeMode.headingColor, fontWeight: "bold" }}
        >
          Your Source of Divine Guidance and Wisdom
        </CustomTypography>

        <CustomParagraph variant="body1" align="justify">
          The Quran is not just a book; it is the ultimate source of guidance
          for millions of people around the world.
        </CustomParagraph>

        <CustomParagraph variant="body1" align="justify">
          <span>Revealed over 1,400 years ago,</span> the Quran is a timeless
          and universal scripture that offers profound insights into the human
          condition, ethics, spirituality, and the nature of the universe. It is
          the word of <span> Allah</span>, as conveyed to humanity through the{" "}
          <span> Prophet Muhammad </span> (peace be upon him).
        </CustomParagraph>

        <FirstButton
          variant="contained"
          className="remove-focus-outline"
        >
          Learn More
        </FirstButton>
      </FirstBox>
    </Root>
  );
}
