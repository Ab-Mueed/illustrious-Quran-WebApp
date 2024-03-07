import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


export const Root = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {margin: 0},
  [theme.breakpoints.up("sm")]: {margin: 0},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("lg")]: {margin: '0 90px'},
}));