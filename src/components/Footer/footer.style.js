import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeMode } from "../../pages/Home";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap:'wrap',
  marginTop: 25,
  marginBottom: 5,
  paddingLeft:10,
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: themeMode.footerBgColor, borderRadius: 2,
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const GridItem = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {},
  }));

  export const CustomButton = styled(Button)(({ theme }) => ({
    color: themeMode.footerTextColor, borderColor: "black",
    [theme.breakpoints.down("sm")]: {width: "40vw", height:'8vh', fontSize:'0.8rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {},
  }));

//   After Divider

export const SecondGridContainer = styled(Grid)(({ theme }) => ({
    mt: 1, display: "flex", alignItems: "center",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

  export const SecondGridItem = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {},
  }));

  export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: themeMode.copyRightTextColor,
    [theme.breakpoints.down("sm")]: {fontSize:'0.8rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {},
  }));
 

  export const CopyRightTypography = styled(Typography)(({ theme }) => ({
    color: themeMode.copyRightTextColor,
    [theme.breakpoints.down("sm")]: {fontSize:'0.5rem'},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {},
  }));

  export const FirstBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    color: themeMode.copyRightTextColor,
    [theme.breakpoints.down("sm")]: {gap:8},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {},
  }));

  export const ThirdGridItem = styled(Grid)(({ theme }) => ({
    display: "flex", justifyContent: "end",
      [theme.breakpoints.down("sm")]: {paddingRight:10},
      [theme.breakpoints.up("sm")]: {},
      [theme.breakpoints.up("md")]: {},
      [theme.breakpoints.down("lg")]: {},
    }));
