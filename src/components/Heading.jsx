import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function Heading({children,variant, ...props}) {
    console.log(variant);
  return (
    <Box>
      <Typography variant={variant} sx={{ color: "#12372A", fontWeight: "bold" }} {...props}>
      {children}
      </Typography>
    </Box>
  );
}
