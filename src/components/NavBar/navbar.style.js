import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themeMode } from "../../pages/Home";

export const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 2,
  // background: "#FAF2D3",
  height: "4rem",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 0.6,
  [theme.breakpoints.down("sm")]: { width: "100%" },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {},
}));

export const FirstBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("lg")]: {paddingLeft:10},
}));

export const SecondBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {  },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {display:'none'},
  }));

  export const ThirdBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: { },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("lg")]: {display:'none'},
  }));