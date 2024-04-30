import { Box, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import logo from "../../assets/logo.jpg";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { themeMode } from "../../pages/Root.jsx";
import { Root, FirstBox, SecondBox, ThirdBox } from "./navbar.style.js";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import SignUp from "../SignUp/SignUp.jsx";
import SignIn from "../SignIn/SignIn.jsx";

export default function NavBar({ onClick }) {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  useEffect(() => {
    // Check if loggedInEmail is set, then update the button label
    if (loggedInEmail) {
      const accountButton = document.getElementById("account-button");
      if (accountButton) {
        accountButton.textContent = loggedInEmail;
      }
    }
  }, [loggedInEmail]);

  // Handler for successful login
  const handleLoginSuccess = (email) => {
    setLoggedInEmail(email);
  };

  const handleSignUpOpen = () => {
    setOpenSignUp(true);
    setShowSignIn(false);
  };

  const handleSignUpClose = () => {
    setOpenSignUp(false);
  };

  const handleToggleView = () => {
    setShowSignIn((prev) => !prev);
    setOpenSignUp(false);
  };

  const handleSignInClose = () => {
    setShowSignIn(false);
  };

  console.log("Sign Up: ", openSignUp);
  console.log("Sign In: ", showSignIn);

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
          {loggedInEmail ? (
            <Button
              variant="text"
              size="small"
              startIcon={<AccountCircleIcon />}
              className="remove-focus-outline"
              disableElevation
              sx={{ color: themeMode.navBarTextColor }}
            >
              {loggedInEmail}
            </Button>
          ) : (
            <Button
              id="account-button"
              // aria-controls={open ? "basic-menu" : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? "true" : undefined}
              onClick={handleSignUpOpen}
              variant="text"
              size="small"
              startIcon={<AccountCircleIcon />}
              className="remove-focus-outline"
              disableElevation
              sx={{ color: themeMode.navBarTextColor }}
            >
              Account
            </Button>
          )}

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
      {openSignUp && (
        <SignUp
          open={openSignUp}
          onClose={handleSignUpClose}
          handleToggleView={handleToggleView}
        />
      )}
      {showSignIn && (
        <SignIn
          open={showSignIn}
          onClose={handleSignInClose}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </Root>
  );
}
