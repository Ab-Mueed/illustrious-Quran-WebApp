import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { themeMode } from "../App.jsx";

export default function Heading({ children, variant, margin, ...props }) {
  return (
    <Box sx={{margin:`0 ${margin}px`}} >
      <Typography
        variant={variant}
        sx={{ color: themeMode.headingColor, fontWeight: "bold" }}
        {...props}
      >
        {children}
      </Typography>
    </Box>
  );
}
