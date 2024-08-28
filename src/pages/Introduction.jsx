import { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { grey } from "@mui/material/colors";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";
import "./Introduction.scss";

export default function Introduction() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const divRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box
        id="introduction"
        className="introduction-container"
        height="100%"
        maxHeight="1200px"
        width="100%"
        sx={{ mt: isMobile ? 5 : 10 }}
      >
        <Box className="introduction-content" width={"100%"}>
          <Typography variant="h2" className="title">
            Full Stack Developer.
          </Typography>
          <Typography variant="h6" className="subtitle">
            I like to create full stack projects from scratch, with a keen eye
            for UI.{" "}
          </Typography>
          <Box className="spacer"></Box>
          <Box className="info-boxes">
            <Box className="info-box">
              <Typography className="info-text">
                Skilled in maintaining and improving existing softwares, with a
                strong focus on UI details
              </Typography>
            </Box>
            <Box className="info-box">
              <Typography className="info-text">
                Proven experience in building full-stack projects using MERN
                technologies.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        {!isMobile && (
          <Box className="image-container">
            <motion.img
              ref={divRef}
              src="https://ik.imagekit.io/7lqiq1zm3ks/IMG_1419a_ikoAWbRgxF_HphuIOoFu.JPG?updatedAt=1724431867244"
              alt="intro-imagekit"
              width="45%"
              style={{ display: "block", borderRadius: "2%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            />
          </Box>
        )}
      </Box>
      <Box width="50%" margin="auto" sx={{ mt: 3, mb: 3 }}>
        <Container align="center">
          <Link href="https://github.com/giuseppe88-sketch">
            <GitHubIcon
              sx={{
                color: grey[400],
                transition: "background-color 0.9s, color 0.3s",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
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
                transition: "background-color 0.9s, color 0.8s",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
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
                transition: "background-color 0.9s, color 0.3s",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            />
          </Link>
        </Container>
      </Box>
    </>
  );
}
