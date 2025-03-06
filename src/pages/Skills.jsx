import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./Skills.css";

// Import logos
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillLogos = [
    { src: Typescript_logo, name: "TypeScript" },
    { src: React_logo, name: "React" },
    { src: Next_logo, name: "Next.js" },
    { src: JS_logo, name: "JavaScript" },
    { src: MUI_logo, name: "Material UI" },
    { src: Node, name: "Node.js" },
    { src: Framer, name: "Framer Motion" },
    { src: Git_logo, name: "Git" },
    { src: Express, name: "Express" },
    { src: Mongo_logo, name: "MongoDB" },
  ];

  const skillCategories = [
    {
      title: "Front-End Development",
      skills: [
        "React & TypeScript/JavaScript: Professional experience in building and maintaining complex front-end applications.",
        "Next.js: Maintained dynamic web pages using Next.js.",
      ],
    },
    {
      title: "Back-End Development",
      skills: [
        "Contributed to backend development, enhancing overall application functionality.",
        "Extensive experience in designing backend systems for side projects using Node.js and MongoDB.",
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        "Involved in mobile application development with React Native, ensuring consistency across platforms.",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Azure: Implemented and managed continuous deployment pipelines on Azure.",
      ],
    },
  ];

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      height="100%"
      maxHeight="1200px"
      sx={{
        backgroundColor: "rgba(22, 28, 36, 0.9)",
        backgroundImage:
          "linear-gradient(to bottom, rgba(22, 28, 36, 0.95), rgba(22, 28, 36, 0.85))",
      }}
    >
      {/* Title Section */}
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center">
          <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{ color: "white", mt: 10 }}
          >
            My Skills
          </Typography>
        </Box>
      </Container>

      {/* Main Content */}
      <Container sx={{ mt: isMobile ? 5 : 8 }}>
        <Grid container spacing={4} columns={{ xs: 4, md: 12 }}>
          {/* Skills Description */}
          <Grid item xs={4} md={7}>
            <Box sx={{ px: isMobile ? 2 : 4, mb: isMobile ? 6 : 10 }}>
              {skillCategories.map((category, categoryIndex) => (
                <Box key={categoryIndex} mb={3}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Box component="ul" sx={{ color: "white", pl: 2 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Box component="li" key={skillIndex} mb={1}>
                        <Typography
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                          variant="body1"
                          
                        >
                          {skill}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Skills Logo Grid */}
          <Grid item xs={4} md={5}>
            <Box sx={{ mb: 5 }}>
              <Grid container spacing={3} justifyContent="center">
                {skillLogos.map((logo, index) => (
                  <Grid
                    item
                    xs={4}
                    sm={3}
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, -5, 5, 0],
                        transition: { duration: 0.5, ease: "easeInOut" },
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        style={{
                          width: "50px",
                          height: "auto",
                          marginBottom: "8px",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          textAlign: "center",
                          display: "block",
                        }}
                      >
                        {logo.name}
                      </Typography>
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
