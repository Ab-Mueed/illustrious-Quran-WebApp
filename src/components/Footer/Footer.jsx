import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import logo from "../../assets/logo.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";
import { themeMode } from "../../pages/Root.jsx";
import {GridContainer, GridItem, Root, CustomButton, SecondGridContainer, SecondGridItem, ThirdGridItem, CopyRightTypography, FirstBox, CustomTypography} from './footer.style.js';

export default function Footer() {
  return (
    <Root sx={{ flexGrow: 1, marginTop: 7, color: "#12372A" }}>
      <GridContainer
        container
        sx={{  }}
        spacing={{xs:2}}
        // p={5}
      >
        {/* Grid-1 */}
        <GridItem item xs={12} >
          <Button
            variant="text"
            className="remove-focus-outline"
            sx={{  }}
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
          <CustomTypography
            variant="body1"
            my={1}
            sx={{ color: themeMode.footerTextColor }}
          >
            An AI enriched Quran experience, where you can embark on a
            transformative journey throught the text of Islam.
          </CustomTypography>
          <Stack direction="row" spacing={2}>
            <CustomButton
              variant="outlined"
              startIcon={<GoogleIcon sx={{ color: "#999" }} />}
              sx={{}}
            >
              Get it on <br /> Google Play
            </CustomButton>
            <CustomButton
              variant="outlined"
              startIcon={<AppleIcon sx={{ color: "#999" }} />}
              sx={{}}
            >
              Get it on <br /> App Store
            </CustomButton>
          </Stack>
        </GridItem>
        {/* Grid-2 */}
        <GridItem item xs={12}>
          <Stack>
            <CustomTypography variant="body1" sx={{ fontWeight: "bold" }}>
              Navigation
            </CustomTypography>
            <CustomTypography variant="body1">Home</CustomTypography>
            <CustomTypography variant="body1">Quran</CustomTypography>
            <CustomTypography variant="body1">Hadith</CustomTypography>
            <CustomTypography variant="body1">Tafsir</CustomTypography>
            <CustomTypography variant="body1">Translations</CustomTypography>
            <CustomTypography variant="body1">
              AI <sup>Beta</sup>
            </CustomTypography>
          </Stack>
        </GridItem>
        {/* Grid-3 */}
        <GridItem item xs={12} sx={{ color: themeMode.footerTextColor }}>
          <Stack>
            <CustomTypography variant="body1" sx={{ fontWeight: "bold" }}>
              Popular Link
            </CustomTypography>
            <CustomTypography variant="body1">Ayatul Kursi</CustomTypography>
            <CustomTypography variant="body1">Yaseen</CustomTypography>
            <CustomTypography variant="body1">Ar-Rahman</CustomTypography>
            <CustomTypography variant="body1">Al Mulk</CustomTypography>
            <CustomTypography variant="body1">Al Muzzammil</CustomTypography>
          </Stack>
        </GridItem>
        {/* Grid-4 */}
        <GridItem item xs={12} sx={{ color: themeMode.footerTextColor }}>
          <Stack>
            <CustomTypography variant="body1" sx={{ fontWeight: "bold" }}>
              Company
            </CustomTypography>
            <CustomTypography variant="body1">FAQ</CustomTypography>
            <CustomTypography variant="body1">About Us</CustomTypography>
            <CustomTypography variant="body1">Contact Us</CustomTypography>
            <CustomTypography variant="body1">Terms & Conditions</CustomTypography>
          </Stack>
        </GridItem>
      </GridContainer>

      <Divider sx={{ my: 3 }} />

      <SecondGridContainer
        container
        spacing={1}
        my={{xs:1}}
      >
        <SecondGridItem item xs={4}>
          <CopyRightTypography
            variant="body1"
            sx={{ }}
          >
            Copyright &copy; 2024 Abdul Mueed | Hamzah Kamili | Hassan Qari
          </CopyRightTypography>
        </SecondGridItem>
        <SecondGridItem item xs={4}>
          <FirstBox
          >
            <CopyRightTypography variant="body1" sx={{ }}>
              Terms
            </CopyRightTypography>
            <CopyRightTypography variant="body1" sx={{ }}>
              Legal
            </CopyRightTypography>
            <CopyRightTypography variant="body1" sx={{ }}>
              Privacy
            </CopyRightTypography>
          </FirstBox>
        </SecondGridItem>
        <ThirdGridItem item xs={4}>
          <GitHubIcon sx={{ color: themeMode.githubIconColor }}/>
        </ThirdGridItem>
      </SecondGridContainer>
    </Root>
  );
}
