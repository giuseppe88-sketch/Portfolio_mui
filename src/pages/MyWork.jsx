import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
  Chip,
  // IconButton,
  useTheme,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";

// Project data structure
const projectsData = [
  {
    id: 1,
    title: "Trello Clone",
    description:
      "Developed a fully functional Trello clone using the MERN stack. The application allows users to seamlessly create, edit, delete, and drag-and-drop tasks across boards.",
    image:
      "https://ik.imagekit.io/7lqiq1zm3ks/Screenshot%20from%202024-08-23%2016-50-50_n3wXEY88T.png?updatedAt=1724424710292",
    liveLink: "https://trelloclone22.netlify.app/",
    githubLink: "",
    technologies: ["React", "MongoDB", "Express", "Node.js", "DnD"],
  },
  {
    id: 2,
    title: "FRAPE Ocean_Scan",
    mobile: true,
    description:
      "Developed a mobile application that allows users to scan fish product barcodes and instantly access sustainability and environmental impact insights. The app integrates the OpenFoodFacts API to retrieve product details and incorporates pollution data analysis using Copernicus Marine satellite data.",
    image:
      "https://ik.imagekit.io/7lqiq1zm3ks/IMG_2845_VI9vLNy6A.jpeg?updatedAt=1740996168373",
    liveLink: "",
    githubLink: "https://github.com/giuseppe88-sketch/frape",
    technologies: ["React Native", "REST API"],
  },
  {
    id: 3,
    title: "CBD Shop Application",
    description:
      "Here I have used React.js to build an application, in this case a CBD shop, where the user is able to info different products and adds them to the shop-cart.",
    image:
      "https://ik.imagekit.io/7lqiq1zm3ks/sscbdshop_KqLDpImgkv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993298857",
    liveLink: "https://lucent-lamington-9b6fb6.netlify.app",
    githubLink: "",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 4,
    title: "Meet App",
    description:
      "Within this project, I build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.",
    image:
      "https://ik.imagekit.io/7lqiq1zm3ks/meetappSS_saBcmV1gj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993069749",
    liveLink: "https://giuseppe88-sketch.github.io/meet/",
    githubLink: "https://github.com/giuseppe88-sketch/meet",
    technologies: ["React", "PWA", "Serverless"],
  },
  {
    id: 5,
    title: "Chat App",
    mobile: true,
    description:
      "Here I have build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.",
    image:
      "https://ik.imagekit.io/7lqiq1zm3ks/native_fRnPu1Paw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643993296721",
    liveLink: "",
    githubLink: "https://github.com/giuseppe88-sketch/Chat-App",
    technologies: ["React Native", "Firebase", "Expo"],
  },
];

export default function MyWork() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#d1d1e0",
      },
      secondary: {
        main: "#1976",
      },
    },
    typography: {
      fontFamily: ["Quicksand", "sans-serif"].join(","),
    },
  });

  // Get unique technologies across all projects TODO:COMINGUP SOON
  // const allTechnologies = [
  //   "All",
  //   ...new Set(projectsData.flatMap((project) => project.technologies)),
  // ];

  // Filter projects by selected technology
  const filteredProjects = projectsData;
  // const filteredProjects = React.useMemo( //TODO: FIX THE FILTERING
  //   () =>
  //     selectedCategory === "All"
  //       ? projectsData
  //       : projectsData.filter((project) =>
  //           project.technologies.includes(selectedCategory)
  //         ),
  //   [selectedCategory, projectsData]
  // );
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

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        id="projects"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: "rgba(22, 28, 36, 0.9)",
          backgroundImage:
            "linear-gradient(to bottom, rgba(22, 28, 36, 0.95), rgba(22, 28, 36, 0.85))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              mb: { xs: 4, md: 6 },
              textAlign: "center",
            }}
          >
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component={motion.div}
              variants={cardVariants}
              sx={{
                color: "white",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Recent Projects
            </Typography>
            <Typography
              variant="body1"
              component={motion.div}
              variants={cardVariants}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "700px",
                mx: "auto",
                mb: 4,
              }}
            >
              Showcasing a collection of applications I've built using modern
              web technologies, with a focus on user experience and clean,
              efficient code.
            </Typography>
            {/* TODO:IMPLEMENTING WHEN FILYTERING IS FIXED */}
            {/* Filter chips */}
            {/* <Box
            component={motion.div}
            variants={cardVariants}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
              mb: 4,
            }}
          >
            {allTechnologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                onClick={() => setSelectedCategory(tech)}
                sx={{
                  backgroundColor:
                    selectedCategory === tech
                      ? theme.palette.primary.main
                      : "rgba(255, 255, 255, 0.05)",
                  color:
                    selectedCategory === tech
                      ? "white"
                      : "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    backgroundColor:
                      selectedCategory === tech
                        ? theme.palette.primary.main
                        : "rgba(255, 255, 255, 0.15)",
                  },
                  transition: "all 0.3s ease",
                  fontWeight: selectedCategory === tech ? "bold" : "normal",
                }}
              />
            ))}
          </Box> */}
          </Box>

          <Grid
            container
            spacing={4}
            component={motion.div}
            variants={containerVariants}
          >
            {filteredProjects.map((project) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={project.id}
                component={motion.div}
                variants={cardVariants}
              >
                <Card
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  component={motion.div}
                  whileHover={{ y: -10 }}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 2,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height={isMobile ? 180 : 220}
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: project.mobile ? "contain" : "cover",
                        width: project.mobile ? "100%" : null,
                        transition: "transform 0.5s ease",
                        transform:
                          hoveredCard === project.id
                            ? "scale(1.05)"
                            : "scale(1)",
                      }}
                    />

                    {/* Overlay gradient */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)",
                      }}
                    />

                    {/* Technology chips */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                        gap: 0.5,
                      }}
                    >
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "#fff",
                            fontSize: "0.65rem",
                            height: 22,
                          }}
                        />
                      ))}
                      {project.technologies.length > 2 && (
                        <Chip
                          label={`+${project.technologies.length - 2}`}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            color: "#fff",
                            fontSize: "0.65rem",
                            height: 22,
                          }}
                        />
                      )}
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        mb: 1.5,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        mb: 2,
                      }}
                    >
                      {project.description.length > 320
                        ? `${project.description.substring(0, 120)}...`
                        : project.description}
                    </Typography>
                  </CardContent>

                  {/* Action buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      p: 2,
                      pt: 0,
                      mt: "auto",
                    }}
                  >
                    {project.liveLink && (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<LaunchIcon />}
                        component={Link}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderRadius: 1.5,
                        }}
                      >
                        Live Demo
                      </Button>
                    )}

                    {project.githubLink && (
                      <Button
                        variant={project.liveLink ? "outlined" : "contained"}
                        color={project.liveLink ? "secondary" : "primary"}
                        size="small"
                        startIcon={<GitHubIcon />}
                        component={Link}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderRadius: 1.5,
                          ml: project.liveLink ? 1 : 0,
                          borderColor: "rgba(255, 255, 255, 0.3)",
                          color: project.liveLink
                            ? "rgba(44, 43, 43, 0.7)"
                            : "rgba(10, 10, 10, 0.7)",
                        }}
                      >
                        Code
                      </Button>
                    )}

                    {/* If there's neither a live link nor a GitHub link */}
                    {!project.liveLink && !project.githubLink && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        startIcon={<CodeIcon />}
                        sx={{
                          borderRadius: 1.5,
                          borderColor: "rgba(255, 255, 255, 0.3)",
                          color: "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        Coming Soon
                      </Button>
                    )}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Call to action */}
          <Box
            component={motion.div}
            variants={cardVariants}
            sx={{
              mt: 8,
              textAlign: "center",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              href="https://github.com/giuseppe88-sketch"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1,
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                },
              }}
            >
              See More on GitHub
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
