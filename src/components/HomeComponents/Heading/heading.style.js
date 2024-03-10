import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {themeMode} from '../../../pages/Root.jsx';

export const Root = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {width:'100%', marginBottom:4},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

export const CustomTypography = styled(Typography)(({ theme }) => ({
    color: themeMode.headingColor, 
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {fontSize:'2rem', paddingLeft:10},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("lg")]: {},
}));
