import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./Skills.css";
import Git_logo from "../asset/Git-Logo.png";
import JS_logo from "../asset/JavaScript-logo.png";
import Mongo_logo from "../asset/mongodb.png";
import Express from "../asset/express_logo.png";
import Framer from "../asset/framer_icon_213374.png";
import MUI_logo from "../asset/material_ui_icon.png";
import Node from "../asset/node_icon.png";
import React_logo from "../asset/react_logo.png";
import Next_logo from "../asset/nextjs_icon.png";
import Typescript_logo from "../asset/typescript_logo.png";

export default function Skills() {
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

  const logos = [
    Typescript_logo,
    React_logo,
    Next_logo,
    JS_logo,
    MUI_logo,
    Node,
    Framer,
    Git_logo,
    Express,
    Mongo_logo,
  ];
  return (
    <Box
      height={!isMobile ? "100%" : "100%"}
      maxHeight="1200px"
      sx={{ backgroundColor: "rgba(115, 119, 126, 0.322)" }}
    >
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{ color: "white", mt: 10 }}
          >
            My Skills
          </Typography>
        </Box>
      </Container>
      <Container sx={{ mt: isMobile ? 5 : 8 }}>
        <Grid container item columns={{ xs: 6, md: 12 }}>
          <Grid item xs={6} alignItems="center">
            <Typography
              variant="h6"
              sx={{
                color: "white",
                ml: !isMobile ? 7 : 2,
                mr: !isMobile ? 7 : 2,
                alignItems: "center",
                mb: !isMobile ? 10 : 0,
              }}
            >
              <strong>Front-End Development:</strong>
              <ul>
                <li>
                  React & TypeScript/JavaScript: Professional experience in
                  building and maintaining complex front-end applications.
                </li>
                <li>Next.js: Maintained dynamic web pages using Next.js.</li>
              </ul>

              <strong>Back-End Development:</strong>
              <ul>
                <li>
                  Contributed to backend development, enhancing overall
                  application functionality.
                </li>
                <li>
                  Extensive experience in designing backend systems for side
                  projects using Node.js and MongoDB.
                </li>
              </ul>

              <strong>Mobile Development:</strong>
              <ul>
                <li>
                  Involved in mobile application development with React Native,
                  ensuring consistency across platforms.
                </li>
              </ul>

              <strong>DevOps & Cloud:</strong>
              <ul>
                <li>
                  Azure: Implemented and managed continuous deployment pipelines
                  on Azure.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                mx: "auto",
                mt: !isMobile ? 4 : 0,
                alignItems: "center",
                ml: 6,
              }}
            >
              <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
                margin="0 auto"
                sx={{ mb: 5 }}
              >
                {logos.map((logo, index) => (
                  <Grid item xs={3} sm={4} md={6} key={index}>
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 5, 0], // Shaking effect by rotating back and forth
                        transition: { duration: 0.5, ease: "easeInOut" }, // Smooth transition for shaking
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <img
                        src={logo}
                        alt={`logo-${index}`}
                        style={{ width: "50px", height: "auto" }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
