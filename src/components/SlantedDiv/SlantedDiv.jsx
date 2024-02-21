import { Box, Typography } from "@mui/material";
import { themeMode } from "../../App";
export default function SlantedDiv() {
  return (
    <>
      <Box sx={{ width: "100vw", position: "relative" }}>
        <Box
          className="first-slant"
          sx={{ backgroundColor: themeMode.firstSlantColor }}
        ></Box>
        <Box
          className="second-slant"
          sx={{
            alignItems: "center",
            backgroundColor: themeMode.secondSlantColor,
          }}
          pt={1}
        >
          <Typography
            variant="body1"
            sx={{
              color: themeMode.slantTextColor,
              fontSize: "1.7vw",
              paddingTop: 1,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            “Allah does not burden a soul beyond that it can bear…” (Al-Baqarah,
            2:286)
          </Typography>
        </Box>
      </Box>
    </>
  );
}
