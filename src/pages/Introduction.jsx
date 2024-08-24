import React from "react";
import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { grey } from "@mui/material/colors";
import Link from "@mui/material/Link";

export default function Introduction() {
  return (
    <>
      <Box
        id="introduction"
        height="100%"
        maxHeight="1200px"
        display="flex"
        flexDirection="row"
        width="80%"
        justifyContent="space-between"
        m="auto"
        sx={{ mt: 10 }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h2" sx={{ color: "white" }}>
            Full Stack Developer.
          </Typography>
          <Typography variant="h6" sx={{ color: "white", mt: 1 }}>
            I like to create full stack project with an eye for UI.
          </Typography>
          <Box sx={{ height: "60px" }}></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "400px",
              gap: "40px",
              flexWrap: "wrap",
              padding: "10px 0 0 30px",
            }}
          >
            <Box sx={{ flex: 1, minWidth: "100px" }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  lineHeight: "16px",
                  wordWrap: "break-word",
                }}
              >
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: "100px" }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  lineHeight: "16px",
                  wordWrap: "break-word",
                }}
              >
                Proven experience building successful products for clients
                across several countries.
              </Typography>
            </Box>
          </Box>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <img
            src="https://ik.imagekit.io/7lqiq1zm3ks/IMG_1419a_ikoAWbRgxF_HphuIOoFu.JPG?updatedAt=1724431867244"
            alt="intro-imagekit"
            width="45%"
          ></img>
        </Box>
      </Box>
      <Box width="50%" margin="auto" sx={{ mt: 3, mb: 3 }}>
        <Container align="center">
          <Link href="https://github.com/giuseppe88-sketch">
            <GitHubIcon
              sx={{
                color: grey[400],
                transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                "&:hover": {
                  backgroundColor: "#5f6e8833",
                  color: "#B0B0B0",
                },
              }}
              fontSize="large"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/giuseppe-adamo-798900223/">
            <LinkedInIcon
              color="primary"
              fontSize="large"
              sx={{
                ml: 2,
                color: grey[400],
                transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                "&:hover": {
                  backgroundColor: "#5f6e8833",
                  color: "#B0B0B0",
                },
              }}
            />
          </Link>
          <Link href="https://twitter.com/home">
            <TwitterIcon
              color="primary"
              fontSize="large"
              sx={{
                ml: 2,
                color: grey[400],
                transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                "&:hover": {
                  backgroundColor: "#5f6e8833",
                  color: "#B0B0B0",
                },
              }}
            />
          </Link>
        </Container>
      </Box>
    </>
  );
}
