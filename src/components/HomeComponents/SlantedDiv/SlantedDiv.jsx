import { Box, Typography } from "@mui/material";
import {themeMode} from '../../../pages/Root.jsx';
import { Root, FirstSlant, SecondSlant, CustomTypography } from "./slantedDiv.style";
export default function SlantedDiv() {
  return (
    <>
      <Root>
        <FirstSlant
          className="first-slant"
          sx={{ backgroundColor: themeMode.firstSlantColor }}
        ></FirstSlant>
        <SecondSlant className="second-slant" pt={3}>
          <CustomTypography variant="body1">
            “Allah does not burden a soul beyond that it can bear…” (Al-Baqarah,
            2:286)
          </CustomTypography>
        </SecondSlant>
      </Root>
    </>
  );
}
