import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import logo from "../../assets/logo.jpg";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { themeMode } from "../../pages/Root.jsx";
import {Root,FirstBox, SecondBox, ThirdBox} from './navbar.style.js';
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function NavBar({ onClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <FirstBox sx={{ display: "flex" }}>
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
      </FirstBox>

      <SecondBox sx={{ display: "flex", gap: 2 }}>
        <Link to="/">
          <Button
            variant="text"
            disableElevation
            id="button"
            sx={{ color: themeMode.navBarTextColor }}
          >
            Home
          </Button>
        </Link>
        <Link to="/Quran">
          <Button
            variant="text"
            disableElevation
            id="button"
            sx={{ color: themeMode.navBarTextColor }}
          >
            Quran
          </Button>
        </Link>
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
      </SecondBox>

      <ThirdBox>
        <Stack direction="row" spacing={1}>
          <div>
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="text"
              size="small"
              startIcon={<AccountCircleIcon />}
              className="remove-focus-outline"
              disableElevation
              sx={{ color: themeMode.navBarTextColor }}
            >
              Account
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Box>
                <Typography varaint="h6">Sign in To Your Account</Typography>

                <form action="">
                  <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                  </div>
                </form>
              </Box>
            </Menu>
          </div>

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
      </ThirdBox>
    </Root>
  );
}
