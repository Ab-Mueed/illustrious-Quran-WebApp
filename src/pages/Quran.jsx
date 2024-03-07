import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from '@mui/material/Divider';

const tempArray = [1, 2, 3, 4, 5, 6];

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
            xs={2}
            sx={{ border: 1, borderColor: "white", borderRadius: 2 }}
          >
            {tempArray.map((items) => (
              <Grid item xs={12}>
                <Button
                  variant="text"
                  sx={{ width: "100%", border: 2, borderColor: "white" }}
                >
                  <Box sx={{ display: "flex", gap: 4 }}>
                    <Typography variant="body1">1</Typography>

                    <Typography variant="body1">Al-Baqarah</Typography>

                    <Typography variant="body1">البقرة</Typography>
                  </Box>
                </Button>
              </Grid>
            ))}
          </Grid>

           <Grid
            container
            xs={9}
            sx={{ border: 1, borderColor: "white", borderRadius: 2 }}
          >


            {
                tempArray.map((items) => (
                    <Box>
                    <Grid item xs={12}>
                     <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed asperiores inventore natus maxime recusandae placeat aliquid maiores perferendis! Impedit eius blanditiis recusandae! Porro provident similique id fugit laudantium! Animi, ipsa?
                     </Typography>
                    </Grid>
                    <Divider style={{ background: 'gray' }} variant="middle" sx={{ borderBottomWidth: 2 }}/>
                    </Box>
                  ))
            }
          </Grid>
     
        </Grid>
      </Box>
    </>
  );
}

export default Quran;
