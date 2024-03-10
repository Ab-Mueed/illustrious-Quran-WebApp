import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {themeMode} from '../../../pages/Root.jsx';

export const Root = styled(Box)(({ theme }) => ({
  // backgroundColor:'red',
      display: "flex",
      justifyContent: "space-between",
      marginTop: 25,
      gap: 10,
      marginBottom: 5,
      paddingTop:1,
  [theme.breakpoints.down("sm")]: {flexWrap:'wrap',},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstImageBox = styled(Box)(({ theme }) => ({
    borderRadius: 6,
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      height: "50vh",
      margin: "auto",
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {borderRadius:3, height:450, width:500},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: themeMode.headingColor, fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {fontSize:'2rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const FirstBox = styled(Box)(({ theme }) => ({
    display: "flex", flexDirection: "column", gap: 5, 
    // backgroundColor:'green',
    [theme.breakpoints.down("sm")]: {paddingLeft:10, paddingRight:10},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {gap:2},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const CustomParagraph = styled(Typography)(({ theme }) => ({
    color:themeMode.paraColor,
    [theme.breakpoints.down("sm")]: {fontSize:'0.9rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const FirstButton = styled(Button)(({ theme }) => ({
    borderRadius: 6,
    background: themeMode.buttonBgColor2,
    color: themeMode.buttonTextColor1,
    [theme.breakpoints.down("sm")]: { width: "45vw"},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {width: "12vw"},
    [theme.breakpoints.up("lg")]: {},
  }));