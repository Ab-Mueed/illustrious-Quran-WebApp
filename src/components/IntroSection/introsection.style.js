import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeMode } from "../../pages/Home";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  background: themeMode.introBgColor,
  gap: 10,
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 2,
  [theme.breakpoints.down("sm")]: {},
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
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const SecondImageBox = styled(Box)(({ theme }) => ({
  borderRadius: 6,
  [theme.breakpoints.down("sm")]: { display: "none" },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 5,
  [theme.breakpoints.down("sm")]: { padding: 10},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstButton = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  background: themeMode.buttonBgColor1,
  color: themeMode.buttonTextColor1,
  [theme.breakpoints.down("sm")]: { width: "45vw" },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const SecondButton = styled(Button)(({ theme }) => ({
  borderRadius: 6,
  background: themeMode.buttonBgColor2,
  color: themeMode.buttonTextColor2,
  [theme.breakpoints.down("sm")]: { width: "45vw" },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));
