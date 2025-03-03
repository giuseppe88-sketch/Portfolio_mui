import React from "react";
import { Typography } from "@mui/material";
import { Box, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { motion } from "framer-motion";

import logo from "../asset/logo.png";
import resume from "../asset/GiuseppeAdamo_Resume.pdf";
import recommendation from "../asset/Recommendation.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Contact() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  const phoneNumber = "+49 17631037200"; // Replace with your phone number
  const whatsappNumber = "+49 15213339971"; // Replace with your WhatsApp number

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
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
      }}
      id="contact"
    >
      <Box padding={isMobile ? "10px" : "100px"}>
        <motion.img
          src={logo}
          alt="logo"
          style={{
            width: "90px",
            padding: "10px",
            marginTop: "10px",
          }}
          whileHover={{
            rotate: 360, // Rotate the logo 360 degrees on hover
            scale: 1.2,
          }}
          transition={{
            duration: 0.5, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        />
      </Box>
      <Box
        gap={!isMobile && "250px"}
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
      >
        <Box
          paddingLeft={!isMobile ? "250px" : "50px"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontSize: "35px", color: "white" }}>
            Say Hello
          </Typography>
          <Box>
            <Link href="mailto:giuseppeadamo908@gmail.com" underline="none">
              <Typography
                sx={{
                  fontSize: "20px",
                  mb: "10px",
                  color: "white",
                  transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                  "&:hover": {
                    color: "#B0B0B0",
                  },
                }}
              >
                giuseppeadamo908@gmail.com
              </Typography>
            </Link>

            <Link href={`tel:${phoneNumber}`} color="primary" underline="none">
              <Typography
                sx={{
                  fontSize: "20px",
                  mb: "10px",
                  color: "white",
                  transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                  "&:hover": {
                    color: "#B0B0B0",
                  },
                }}
              >
                Call me: {phoneNumber}
              </Typography>
            </Link>
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              color="primary"
              underline="none"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                  "&:hover": {
                    color: "#B0B0B0",
                  },
                }}
              >
                WhatsApp me: {whatsappNumber}
              </Typography>
            </Link>
          </Box>
        </Box>

        <Box
          ml={isMobile && "15px"}
          sx={{ mt: "70px", display: "flex", flexDirection: "column" }}
        >
          <Link
            href={resume}
            target="_blank"
            color="primary"
            underline="none"
            download
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                mb: "10px",
                transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                "&:hover": {
                  color: "#B0B0B0",
                },
              }}
            >
              Resume
            </Typography>
          </Link>
          <Link
            href={recommendation}
            target="_blank"
            color="primary"
            underline="none"
            download
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                "&:hover": {
                  color: "#B0B0B0",
                },
              }}
            >
              Recommendation
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          py: 2,
          borderTop: "2px solid rgba(115, 119, 126, 0.322)",
          textAlign: "center",
          width: "90%",
          margin: "0 auto",
          mt: 14,
        }}
      >
        <Box display="flex" justifyContent="space-between" sx={{ mt: "20px" }}>
          <Typography color="textSecondary">
            © 2024 Giuseppe Adamo. All rights reserved.
          </Typography>
          <Box>
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
                  transition: "background-color 0.9s, color 0.3s",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
