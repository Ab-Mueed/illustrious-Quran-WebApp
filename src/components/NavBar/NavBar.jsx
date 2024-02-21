import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import logo from "../../assets/logo.jpg";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { themeMode } from "../../App";

export default function NavBar({ onClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        // background: "#FAF2D3",
        height: "4rem",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0.6,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          src={logo}
          alt=""
          height="auto"
          width="20vw"
          style={{ marginRight: 5 }}
        />
        <Typography
          variant="body1"
          sx={{ color: themeMode.navBarTextColor, fontWeight: 500 }}
        >
          illustrious Quran
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: themeMode.navBarTextColor }}
        >
          Home
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: themeMode.navBarTextColor }}
        >
          Quran
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: themeMode.navBarTextColor }}
        >
          Hadith
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: themeMode.navBarTextColor }}
        >
          Tafsir
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: themeMode.navBarTextColor }}
        >
          Translations
        </Button>
        <Button
          variant="text"
          disableElevation
          id="button"
          sx={{ color: themeMode.navBarTextColor }}
        >
          AI<sup>Beta</sup>
        </Button>
      </Box>

      <Box>
        <Stack direction="row" spacing={1}>
          <Button
            variant="text"
            size="small"
            startIcon={<AccountCircleIcon />}
            className="remove-focus-outline"
            disableElevation
            sx={{ color: themeMode.navBarTextColor }}
          >
            Account
          </Button>

          <Button
            variant="text"
            size="small"
            onClick={onClick}
            className="remove-focus-outline"
            startIcon={<ColorLensRoundedIcon />}
            disableElevation
            sx={{ color: themeMode.navBarTextColor }}
          ></Button>
        </Stack>
      </Box>
    </Box>
  );
}
