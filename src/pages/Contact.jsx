import React from "react";
import { Typography } from "@mui/material";
import { Box, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { motion } from "framer-motion";

import logo from "../asset/logo.png";
import resume from "../asset/cv.pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Contact() {
  const phoneNumber = "+49 17631037200"; // Replace with your phone number
  const whatsappNumber = "+49 15213339971"; // Replace with your WhatsApp number
  const resumeLink = "/"; // Path to your CV file

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "rgba(115, 119, 126, 0.322)",
      }}
      id="contact"
    >
      <Box
        sx={{
          padding: "100px",
        }}
      >
        <motion.img
          src={logo}
          alt="logo"
          style={{
            width: "90px",
            padding: "10px",
            marginTop: "10px",
          }}
          // Animation when hovering over the logo
          whileHover={{
            rotate: 360, // Rotate the logo 360 degrees on hover
            scale: 1.2, // Scale up slightly on hover
          }}
          transition={{
            duration: 0.5, // Animation duration
            ease: "easeInOut", // Easing function
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "250px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "200px",
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

        <Box sx={{ mt: "70px", display: "flex", flexDirection: "column" }}>
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
                transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                "&:hover": {
                  color: "#B0B0B0",
                },
              }}
            >
              Recomandation
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          py: 2,
          borderTop: "2px solid #000", // Solid line with thickness and color
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
          </Box>
        </Box>
      </Box>
      {/* <Grid
          container
          // columns={10}
          columns={{ xs: 2, md: 10 }}
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
            
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Link href="tel:+491785049284">
                <Item className={classes.container}>
                  <IoIosPhonePortrait />
                </Item>
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  <i>017631037200</i>
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Link href="https://www.linkedin.com/in/giuseppe-adamo-798900223/">
                <Item className={classes.container}>
                  <AiOutlineLinkedin />
                </Item>
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  <i>Connect here</i>
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Link href="https://twitter.com/home">
                <Item className={classes.container}>
                  <AiFillTwitterSquare />
                </Item>
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  <i>Follow me</i>
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Link href="https://github.com/giuseppe88-sketch">
                <Item className={classes.container}>
                  <FaGithubSquare />
                </Item>
                <Typography sx={{ color: "white", textAlign: "center" }}>
                  <i>Found me here</i>
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid> */}
      {/* <Box display="flex"
            flexDirection="row"
            justifyContent="center"
            sx={{mt:8}}
            className="icons"
            
           >
          <Box flexDirection="column"
                alignItems="center"
                
                >     
           <Link href="mailto:giuseppeadamo908@gmail.com"><Item className={classes.container}><MdEmail /></Item><Typography variant="h7" sx={{color:"white"}}><i>giuseppeadamo908@gmail.com</i></Typography></Link>
          </Box> 
          <Box flexDirection="column"
                alignItems="center"
                justifyContent="center"
                >
          <Link href="tel:+491785049284"><Item className={classes.container}><IoIosPhonePortrait /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>01785049284</i></Typography></Link> 
           </Box>
         <Box 
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
              >
          <Link href="https://www.linkedin.com/in/giuseppe-adamo-798900223/"><Item className={classes.container}><AiOutlineLinkedin /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>Connect here</i></Typography></Link>
            </Box>
            <Box 
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             >
          <Link href="https://twitter.com/home"><Item className={classes.container}><AiFillTwitterSquare /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>Follow me</i></Typography></Link>
          </Box>
          <Box 
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             >
          <Link href="https://github.com/giuseppe88-sketch"><Item className={classes.container}><FaGithubSquare /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>Found me here</i></Typography></Link>
          </Box>
       </Box> */}
    </Box>
  );
}
