import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {themeMode} from '../../../pages/Root.jsx';

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  background: themeMode.introBgColor,
  gap: 10,
  justifyContent: "space-between",
  alignItems: "center",
  padding: 2,
  [theme.breakpoints.down("sm")]: {flexWrap: "wrap",},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {gap:8},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstImageBox = styled(Box)(({ theme }) => ({
  borderRadius: 6,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
    height: "50vh",
    margin: "",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {borderRadius:3, height:370, width:350},
  [theme.breakpoints.up("lg")]: {},
}));

export const SecondImageBox = styled(Box)(({ theme }) => ({
  borderRadius: 6,
  width: "50%",
  [theme.breakpoints.down("sm")]: { display: "none" },
  [theme.breakpoints.down("md")]: {display:'none'},
  [theme.breakpoints.up("md")]: {borderRadius:3, height:370, width:350},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  [theme.breakpoints.down("sm")]: { padding: 10},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {gap:5},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstButton = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  background: themeMode.buttonBgColor1,
  color: themeMode.buttonTextColor1,
  [theme.breakpoints.down("sm")]: { width: "45vw" },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {width:'12vw'},
  [theme.breakpoints.up("lg")]: {},
}));

export const SecondButton = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  background: themeMode.buttonBgColor2,
  color: themeMode.buttonTextColor2,
  [theme.breakpoints.down("sm")]: { width: "45vw" },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {width:'12vw'},
  [theme.breakpoints.up("lg")]: {},
}));
