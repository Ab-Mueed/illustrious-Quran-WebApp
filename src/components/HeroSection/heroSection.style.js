import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeMode } from "../../pages/Home";

export const Root = styled(Box)(({ theme }) => ({
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

  export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: themeMode.headingColor, fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {fontSize:'2rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const FirstBox = styled(Box)(({ theme }) => ({
    display: "flex", flexDirection: "column", gap: 5, 
    [theme.breakpoints.down("sm")]: {paddingLeft:10, paddingRight:10},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {},
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
    width: 200,
    background: themeMode.buttonBgColor2,
    color: themeMode.buttonTextColor1,
    [theme.breakpoints.down("sm")]: { width: "45vw"},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));