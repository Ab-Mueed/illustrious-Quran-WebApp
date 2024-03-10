import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {themeMode} from '../../../pages/Root.jsx';

export const Root = styled(Box)(({ theme }) => ({
  marginTop: 30,
  flexGrow: 1,
  [theme.breakpoints.down("sm")]: {minWidth:'80vw'},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {spacing:3},
  [theme.breakpoints.up("lg")]: {},
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("lg")]: {},
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: themeMode.cardsBgColor,
  margin: "auto",
  display: "flex",
  position: "relative",
//   maxWidth: "40vw",
  [theme.breakpoints.down("sm")]: {maxWidth:'90vw', height:'35vh'},
  [theme.breakpoints.up("sm")]: {maxWidth:'60vw'},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {maxWidth:'40vw'},
  [theme.breakpoints.up("xl")]: {},
}));

export const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {height:0, minWidth:0},
    [theme.breakpoints.up("sm")]: {height:0, minWidth:0},
    [theme.breakpoints.up("md")]: {height:'auto', minWidth:230},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const CustomTitleTypography = styled(Typography)(({ theme }) => ({
    color: themeMode.cardsTitleColor, fontWeight:'bold',
    [theme.breakpoints.down("sm")]: {fontSize:'0.8rem'},
    [theme.breakpoints.up("sm")]: {fontSize:'1.4rem'},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const CustomDescriptionTypography = styled(Typography)(({ theme }) => ({
    color:themeMode.paraColor,
    [theme.breakpoints.down("sm")]: {fontSize:'0.8rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));


// export const Box = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.down('xs')]: {    },
//     [theme.breakpoints.up('sm')]: {    },
//     [theme.breakpoints.up('md')]: {    },
//     [theme.breakpoints.up('lg')]: {  },
//   }));

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
