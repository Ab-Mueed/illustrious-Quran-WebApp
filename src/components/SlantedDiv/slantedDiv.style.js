import { Box,Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeMode } from "../../pages/Home";

export const Root = styled(Box)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstSlant = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: themeMode.firstSlantColor,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const SecondSlant = styled(Box)(({ theme }) => ({
    backgroundColor: themeMode.secondSlantColor,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: themeMode.slantTextColor, fontWeight: 500, textAlign: "center",
    [theme.breakpoints.down("sm")]: {fontSize:'1rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));
