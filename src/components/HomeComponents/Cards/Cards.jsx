import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { cardsData } from "../../../util/cardsData.js";
import { themeMode } from '../../../pages/Root.jsx';
import { Root, GridItem, CustomCard, CustomCardMedia, CustomTitleTypography, CustomDescriptionTypography } from './cards.style.js';
import img from '../../../assets/card1.jpg';

export default function Cards() {
  return (
    <Root className="container mx-auto px-4">
      <Grid container spacing={2} className="flex flex-wrap -mx-2">
        {cardsData.map((items, index) => (
          <GridItem key={index} item xs={12} lg={6} className="w-full lg:w-1/2 px-2 mb-4">
            <CustomCard sx={{ height: 255 }}>
              <CustomCardMedia image={items.image} title="Makkah" />

              <Box>
                <CardContent sx={{ height: 150 }}>
                  <CustomTitleTypography gutterBottom variant="body2" component="div">
                    {items.title}
                  </CustomTitleTypography>
                  <CustomDescriptionTypography variant="body2" sx={{ color: themeMode.paraColor }}>
                    {items.des}
                  </CustomDescriptionTypography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    className="remove-focus-outline"
                    sx={{ color: themeMode.cardsButtonColor, position: 'absolute', right: 10, bottom: 10 }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Box>
            </CustomCard>
          </GridItem>
        ))}
      </Grid>
    </Root>
  );
}
