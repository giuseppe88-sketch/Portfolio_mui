import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { IoLogoReact, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaBootstrap, FaAngular, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
});


export default function About() {
  const classes = useStyles();

  return (
    <Box id="about" height="100vh" mb={14}>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Typography variant="h2" sx={{ color: "white", mt: 10 }}>
            About Me
          </Typography>
        </Box>
      </Container>
      <Container sx={{ mt: 10 }}>
        <Grid container item columns={{ xs: 4, md: 12 }}>
          <Grid item xs={4}>
            <Box>
              <img
                src="https://ik.imagekit.io/7lqiq1zm3ks/IMG_0914_DH1PP8NaR.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1644003243333"
                alt="imagekit"
                width="400"
                className="pic-about"
              ></img>
            </Box>
          </Grid>
          <Grid item xs={7} alignItems="center">
            <Typography
              variant="h6"
              sx={{ color: "white", ml: 7, mt: 1, alignItems: "center" }}
            >
              Because I have lived in different european cities, I like to call
              many places 'home'. Born in 1988 and raised in Italy, I began my
              journey to independence in my early 20s by living in London, then
              in Spain, then here in Berlin. Passionate about traveling and
              discovering new cultures, I am now pursuing my passion to become a
              software developer.
              <br></br>
              In 2021, I graduated from CareerFoundry after completing an
              8-month Bootcamp. Shortly after, I secured my first junior
              position at a cloud-based software solutions company, where I
              worked for 2 years. 
              <br></br>
              Over those years, I've honed my skills as a
              front-end developer while also gaining experience in mobile
              development and backend technologies.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* <Container className={classes.container}>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Typography variant="h4" sx={{ color: "white", mt: 10 }}>
            My Skills
          </Typography>
        </Box>
        <Grid
          container
          item
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          columns={{ xs: 6, md: 12 }}
          sx={{ mt: 5 }}
        >
          <IconContext.Provider
            value={{
              style: {
                marginTop: 2,
                verticalAlign: "middle",
                fontSize: "30px",
                color: "rgb(0, 123, 255)",
              },
            }}
          >
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <IoLogoReact />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>React</Typography>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <IoLogoJavascript />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>Javascript</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <IoLogoNodejs />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>Node.Js</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <IoLogoNodejs />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>Express.js</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <FaBootstrap />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>Bootstrap</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <IoLogoReact />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>React Native</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <DiMongodb />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>MongoDB</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <FaAngular />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>Angular</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <FaHtml5 />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>Html5</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <FaCss3Alt />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>CSS3</Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>Material UI</Item>
            </Grid>
            <Grid item xs={3}>
              <Item className={classes.container}>
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <SiTypescript />
                  <Typography sx={{ ml: 1, mt: 0.6 }}>Typescript</Typography>
                </Box>
              </Item>
            </Grid>
          </IconContext.Provider>
        </Grid>
      </Container> */}
    </Box>
  );
}
