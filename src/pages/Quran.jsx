import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';
import NavigationSection from '../components/QuranComponents/NavigationSection/NavigationSection'
import DisplayQuranSection from '../components/QuranComponents/DisplayQuranSection/DisplayQuranSection'


function Quran({ props }) {
  return (
    <>
      <Box sx={{ }}>
        <Grid
          mt={2}
          container
          spacing={1}
          gap={10}
          sx={{ width: "100%", marginLeft: "16px" }}
        >
          <Grid
            container
            xs={3}
            sx={{ border: 1, borderColor: "white", borderRadius: 2 }}
          >
            <NavigationSection />
          </Grid>

           <Grid
            container
            xs={8}
            sx={{ border: 1, borderColor: "white", borderRadius: 2 }}
          >
            <DisplayQuranSection />
          </Grid>
     
        </Grid>
      </Box>
    </>
  );
}

export default Quran;
