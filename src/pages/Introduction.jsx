import { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Button,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import "./Introduction.scss";

export default function Introduction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const divRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <Box
        id="introduction"
        className="introduction-container"
        height="100%"
        maxHeight="1200px"
        width="100%"
        sx={{
          mt: isMobile ? 5 : 10,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          // padding: theme.spacing(2, 4),
        }}
      >
        <Box
          className="introduction-content"
          width={isMobile ? "100%" : "40%"}
          component={motion.div}
          variants={childVariants}
        >
          <Typography
            variant="h2"
            className="title"
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(45deg,rgb(253, 240, 240) 30%, #616161 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: isMobile ? "2.5rem" : "3.5rem",
            }}
          >
            Full Stack Developer
          </Typography>
          <Typography
            variant="h6"
            className="subtitle"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.6,
            }}
          >
            Sometimes I build full-stack projects from scratch—because why make
            life easy? At least the UI looks good… I think.
            <br />
            Check out my blog for more techy content and other stuff, or scroll
            down to see my projects and skills!
            {/* I craft dynamic web applications from concept to deployment, with a
            passion for clean code and intuitive user experiences. */}
          </Typography>

          <Box
            className="info-boxes"
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 3,
              mb: 4,
            }}
          >
            <Box
              className="info-box"
              sx={{
                p: 2,
                bgcolor: "rgba(0,0,0,0.03)",
                borderRadius: 2,
                flex: 1,
                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ mb: 1, color: "#fff" }}
              >
                Development
              </Typography>
              <Typography className="info-text">
                Skilled in maintaining and improving existing softwares, with a
                strong focus on UI details
              </Typography>
            </Box>

            <Box
              className="info-box"
              sx={{
                p: 2,
                bgcolor: "rgba(0,0,0,0.03)",
                borderRadius: 2,
                flex: 1,
                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ mb: 1, color: "#fff" }}
              >
                Design
              </Typography>
              <Typography className="info-text">
                Building full-stack projects with MERN technologies, focusing on
                scalable and maintainable code architectures.
              </Typography>
            </Box>
          </Box>
        </Box>

        {!isMobile && (
          <Box
            className="image-container"
            sx={{ width: "35%" }}
            component={motion.div}
            variants={childVariants}
          >
            <motion.div
              style={{
                position: "relative",
                width: "70%",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "2%",
                  border: "2px solid rgba(0,0,0,0.1)",
                  top: 10,
                  left: 20,
                  zIndex: 0,
                }}
              />
              <motion.img
                ref={divRef}
                src="https://ik.imagekit.io/7lqiq1zm3ks/IMG_1419a_ikoAWbRgxF_HphuIOoFu.JPG?updatedAt=1724431867244"
                alt="Giuseppe Adamo - Full Stack Developer"
                style={{
                  display: "block",
                  borderRadius: "2%",
                  width: "100%",
                  objectFit: "cover",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  position: "relative",
                  zIndex: 1,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          </Box>
        )}
      </Box>

      <Box
        width="100%"
        sx={{
          mt: 5,
          mb: 5,
          display: "flex",
          justifyContent: "center",
        }}
        component={motion.div}
        variants={childVariants}
      >
        <Container
          maxWidth="md"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton
            component={Link}
            href="https://github.com/giuseppe88-sketch"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mx: 1,
              color: "text.secondary",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                transform: "translateY(-3px)",
              },
            }}
            size="large"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/giuseppe-adamo-798900223/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mx: 1,
              color: "text.secondary",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#0077B5",
                color: "white",
                transform: "translateY(-3px)",
              },
            }}
            size="large"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton
            component={Link}
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mx: 1,
              color: "text.secondary",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1DA1F2",
                color: "white",
                transform: "translateY(-3px)",
              },
            }}
            size="large"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Container>
      </Box>
    </motion.div>
  );
}
