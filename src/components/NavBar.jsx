import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import logo from "../assets/logo.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        background: "#FAF2D3",
        height: "4rem",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0.6,
      }}
    >
      <Box sx={{display:'flex'}}>
        <img
          src={logo}
          alt=""
          height="auto"
          width="20vw"
          style={{ marginRight: 5 }}
        />
        <Typography variant="body1" sx={{ color: "#12372A", fontWeight: 500 }}>
          illustrious Quran
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: "#12372A" }}
        >
          Home
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: "#12372A" }}
        >
          Quran
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: "#12372A" }}
        >
          Hadith
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: "#12372A" }}
        >
          Tafsir
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: "#12372A" }}
        >
          Translations
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: "#12372A" }}
        >
          AI<sup>Beta</sup>
        </Button>
      </Box>

      <Box>
        <Button
          variant="text"
          size="small"
          startIcon={<AccountCircleIcon />}
          disableElevation
          sx={{ color: "#364F6B" }}
        >
          Account
        </Button>
      </Box>
    </Box>
  );
}
