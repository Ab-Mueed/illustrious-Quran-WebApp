import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";
import { themeMode } from "../App.jsx";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 7, color: "#12372A" }}>
      <Grid
        container
        sx={{ backgroundColor: themeMode.footerBgColor, borderRadius: 2 }}
        p={5}
      >
        {/* Grid-1 */}
        <Grid item xs={6} px={5}>
          <Button
            variant="text"
            className="remove-focus-outline"
            sx={{ color: themeMode.footerTextColor }}
          >
            <img
              src={logo}
              alt=""
              height="auto"
              width="20vw"
              style={{ marginRight: 5 }}
            />
            illustrious-Quran
          </Button>
          <Typography
            variant="body1"
            my={1}
            sx={{ color: themeMode.footerTextColor }}
          >
            An AI enriched Quran experience, where you can embark on a
            transformative journey throught the text of Islam.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon sx={{ color: "#999" }} />}
              sx={{ color: themeMode.footerTextColor, borderColor: "black" }}
            >
              Get it on <br /> Google Play
            </Button>
            <Button
              variant="outlined"
              startIcon={<AppleIcon sx={{ color: "#999" }} />}
              sx={{ color: themeMode.footerTextColor, borderColor: "black" }}
            >
              Get it on <br /> App Store
            </Button>
          </Stack>
        </Grid>
        {/* Grid-2 */}
        <Grid item xs={2} sx={{ color: themeMode.footerTextColor }}>
          <Stack>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Navigation
            </Typography>
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">Quran</Typography>
            <Typography variant="body1">Hadith</Typography>
            <Typography variant="body1">Tafsir</Typography>
            <Typography variant="body1">Translations</Typography>
            <Typography variant="body1">
              AI <sup>Beta</sup>
            </Typography>
          </Stack>
        </Grid>
        {/* Grid-3 */}
        <Grid item xs={2} sx={{ color: themeMode.footerTextColor }}>
          <Stack>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Popular Link{" "}
            </Typography>
            <Typography variant="body1">Ayatul Kursi</Typography>
            <Typography variant="body1">Yaseen</Typography>
            <Typography variant="body1">Ar-Rahman</Typography>
            <Typography variant="body1">Al Mulk</Typography>
            <Typography variant="body1">Al Muzzammil</Typography>
          </Stack>
        </Grid>
        {/* Grid-4 */}
        <Grid item xs={2} sx={{ color: themeMode.footerTextColor }}>
          <Stack>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Company{" "}
            </Typography>
            <Typography variant="body1">FAQ</Typography>
            <Typography variant="body1">About Us</Typography>
            <Typography variant="body1">Contact Us</Typography>
            <Typography variant="body1">Terms & Conditions</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 1 }} />

      <Grid
        container
        spacing={1}
        sx={{ mt: 1, display: "flex", alignItems: "center" }}
        mb={2}
      >
        <Grid item xs={4}>
          <Typography
            variant="body1"
            sx={{ fontSize: 12, color: themeMode.copyRightTextColor }}
          >
            Copyright &copy; 2024 Abdul Mueed | Hamzah Kamili | Hassan Qari
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              color: themeMode.copyRightTextColor,
            }}
          >
            <Typography variant="body1" sx={{ fontSize: 12 }}>
              Terms
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12 }}>
              Legal
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 12 }}>
              Privacy
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "end" }}>
          <GitHubIcon sx={{ color: themeMode.githubIconColor }} />
        </Grid>
      </Grid>
    </Box>
  );
}
