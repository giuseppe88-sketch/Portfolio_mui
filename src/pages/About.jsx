import React from "react";
import { Container, Grid, Box } from "@mui/material";

import { Typography } from "@mui/material";

import HexagonalPrism from "../components/HexagonLogo";

export default function About() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box id="about" height="100%" mb={isMobile ? 4 : 10}>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{ color: "white", mt: 8 }}
          >
            About Me
          </Typography>
        </Box>
      </Container>
      <Container sx={{ mt: isMobile ? 5 : 8 }}>
        <Grid container item columns={{ xs: 4, md: 12 }}>
          <Grid item xs={4}>
            {!isMobile && (
              <Box>
                <HexagonalPrism />
              </Box>
            )}
          </Grid>
          <Grid item xs={7} alignItems="center">
            <Typography
              variant="h6"
              sx={{
                color: "white",
                ml: !isMobile ? 7 : 2,
                mr: !isMobile ? 7 : 2,
                mt: 1,
                alignItems: "center",
              }}
            >
              Because I have lived in different european cities, I like to call
              many places 'home'. Born in 1988 and raised in Italy, I began my
              journey to independence in my early 20s by living in London, then
              in Spain, then here in Berlin.
              <br></br>
              Passionate about traveling and discovering new cultures, I am now
              pursuing my passion to become a Software Developer.
              <br></br>
              In 2021, I graduated from CareerFoundry after completing an
              8-month Bootcamp. Shortly after, I secured my first junior
              position at a cloud-based software solutions company, where I
              worked for 2 years.
              <br></br>
              Over those years, I've honed my skills as a front-end developer
              while also gaining experience in mobile development and backend
              technologies.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
