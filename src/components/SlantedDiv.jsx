import { Box, Typography } from "@mui/material";
export default function SlantedDiv() {
  return (
    <>
      <Box sx={{ width:'100vw', position:'relative'}}>
        <Box className="first-slant"></Box>
        <Box className="second-slant" sx={{ alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#12372A",
              fontSize: 34.7,
              paddingTop: 1,
              fontWeight: 500,
            }}
          >
            ation &nbsp;&nbsp; + &nbsp;&nbsp; Timeless Wisdom &nbsp;&nbsp; +
            &nbsp;&nbsp; Literary Excellence &nbsp;&nbsp; + &nbsp;&nbsp;
            Universality &nbsp;&nbsp; + &nbsp;&nbsp; Comprehe
          </Typography>
        </Box>
      </Box>
    </>
  );
}
