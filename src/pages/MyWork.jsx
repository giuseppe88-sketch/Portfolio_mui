import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    "&:hover $cardContent": {
      opacity: 1,
      visibility: "visible",
    },
  },
  cardContent: {
    position: "absolute",
    bottom: 45,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.5s, visibility 0.2s",
  },
  cardActions: {
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  },
}));

export default function MyWork() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  const classes = useStyles();

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
      id="projects"
      sx={{
        height: "100%",
        backgroundColor: "rgba(115, 119, 126, 0.322)",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Box>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              mt={isMobile ? 5 : 10}
              sx={{ color: "white" }}
            >
              Projects
            </Typography>
          </Box>
        </Box>
      </Container>
      <Grid
        container
        item
        rowSpacing={3}
        columnSpacing={{ xs: 6, sm: 6, md: 8 }}
        columns={{ xs: 4, md: 8 }}
        padding={"50px"}
        justifyContent="center"
        alignItems="center"
        mt={isMobile ? 1 : 3}
      >
        <Grid item xs={3}>
          <Card className={classes.container}>
            <CardMedia
              component="img"
              height={isMobile ? "100px" : 260}
              image="https://ik.imagekit.io/7lqiq1zm3ks/Screenshot%20from%202024-08-23%2016-50-50_n3wXEY88T.png?updatedAt=1724424710292"
              alt="Trello_CLONE"
              sx={{ objectFit: "fill" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                Trello Clone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developed a fully functional Trello clone using the MERN stack.
                The application allows users to seamlessly create, edit, delete,
                and drag-and-drop tasks across boards.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small">
                <Link
                  href="https://trelloclone22.netlify.app/"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                    borderRadius: "5px",
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  See the project
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>{" "}
        <Grid item xs={3}>
          <Card className={classes.container}>
            <CardMedia
              component="img"
              height={isMobile ? "100px" : 260}
              image="https://ik.imagekit.io/7lqiq1zm3ks/IMG_2845_VI9vLNy6A.jpeg?updatedAt=1740996168373"
              alt="FRAPE"
              sx={{ objectFit: "fill" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                FRAPE Ocean_Scan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developed a mobile application that allows users to scan fish
                product barcodes and instantly access sustainability and
                environmental impact insights. The app integrates the
                OpenFoodFacts API to retrieve product details and incorporates
                pollution data analysis using Copernicus Marine satellite data
                to provide users with informed seafood choices.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small">
                <Link
                  href="https://github.com/giuseppe88-sketch/frape"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                    borderRadius: "5px",
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.9)",
                    },
                    objectFit: "contain",
                    width: "100%",
                  }}
                >
                  See the Github
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>{" "}
        <Grid item xs={3}>
          <Card className={classes.container}>
            <CardMedia
              component="img"
              height={isMobile ? "100px" : 260}
              image="https://ik.imagekit.io/7lqiq1zm3ks/sscbdshop_KqLDpImgkv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993298857"
              alt="green iguana"
              sx={{ objectFit: "fill" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                Cbd Shop Application
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Here I have used React.js to build an application, in this case
                a cbd shop, where the user is able to info different products
                and adds them to the shop-cart.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small">
                <Link
                  href="https://lucent-lamington-9b6fb6.netlify.app"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                    borderRadius: "5px",
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  See the project
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.container}>
            <CardMedia
              component="img"
              height={isMobile ? "100px" : 260}
              image="https://ik.imagekit.io/7lqiq1zm3ks/meetappSS_saBcmV1gj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993069749"
              alt="Meet app"
              sx={{ objectFit: "fill" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                Meet app
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Within this project, I build a serverless, progressive web
                application (PWA) with React using a test-driven development
                (TDD) technique.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small">
                <Link
                  href="https://giuseppe88-sketch.github.io/meet/"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                    borderRadius: "5px",
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  See the project
                </Link>
              </Button>
              <Button size="small">
                <Link
                  href="https://github.com/giuseppe88-sketch/meet"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                    borderRadius: "5px",
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  See the github
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.container}>
            <CardMedia
              component="img"
              height={isMobile ? "100px" : 260}
              image="https://ik.imagekit.io/7lqiq1zm3ks/native_fRnPu1Paw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643993296721"
              alt="Meet app"
              sx={{ objectFit: "contain", width: "100%" }}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                Chat App
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Here I have build a chat app for mobile devices using React
                Native. The app will provide users with a chat interface and
                options to share images and their location.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small">
                <Link
                  href="https://github.com/giuseppe88-sketch/Chat-App"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                    borderRadius: "5px",
                    "&:hover": {
                      color: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  See github
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
