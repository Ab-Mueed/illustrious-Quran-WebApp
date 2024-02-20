import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { cardsData } from "../util/cardsData.js";
import {themeMode} from '../App.jsx';

export default function Cards() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 7 }}>
      <Grid container spacing={3} >
        { cardsData.map((items)=>(
          <Grid item xs={6} >
            <Card 
              sx={{ maxWidth: 550, backgroundColor: themeMode.cardsBgColor, margin: "auto", display:'flex', height:255,
            position:'relative' }}
            >
              <CardMedia sx={{ height: 'auto', minWidth:230 }} image={items.image} title="Makkah" />
             <Box>
              <CardContent sx={{ height: 150 }}>
                <Typography gutterBottom variant="body2" component="div" sx={{fontWeight:'bold', color: themeMode.cardsTitleColor}}>
                  {items.title}
                </Typography>
                <Typography variant="body2" sx={{color:themeMode.paraColor}}>
                  {items.des}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" 
                className="remove-focus-outline"
                sx={{color:themeMode.cardsButtonColor, position:'absolute', right:10, bottom:10}}>Learn More</Button>
              </CardActions>
              </Box>
            </Card>
          </Grid>
        ))
          
        }
      </Grid>
    </Box>
  );
}
