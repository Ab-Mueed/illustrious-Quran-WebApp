import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function Heading({ children, variant, margin, ...props }) {
//   console.log(margin);
  return (
    <Box sx={{margin:`0 ${margin}px`}} >
      <Typography
        variant={variant}
        sx={{ color: "#12372A", fontWeight: "bold" }}
        {...props}
      >
        {children}
      </Typography>
    </Box>
  );
}
