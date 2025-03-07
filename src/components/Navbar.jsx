import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link, scroller } from "react-scroll";
import logo from "../asset/logo.png";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickLink = (section) => {
    if (window.location.pathname !== "/") {
      navigate("/");

      // Use react-scroll's scroller to smoothly scroll to the section
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 1500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      }, 300);
    }
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" width="100%" sx={{ background: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link to="introduction" smooth={true} duration={1000}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                <Link to="about" smooth={true} duration={1000}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About me</Typography>
                  </MenuItem>
                </Link>
                <Link to="projects" smooth={true} duration={1000}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Projects</Typography>
                  </MenuItem>
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Contact</Typography>
                  </MenuItem>
                </Link>
                <RouterLink to="/blog" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="#000">Blog</Typography>
                  </MenuItem>
                </RouterLink>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {/* LOGO */}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              {" "}
              <Box sx={{ display: "flex" }}>
                <Link
                  to="introduction"
                  smooth={true}
                  duration={1000}
                  onClick={() => handleClickLink("introduction")}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      borderRadius: "10px",
                      transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                      "&:hover": {
                        backgroundColor: "#5f6e8833",
                        color: "#B0B0B0",
                      },
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={1000}
                  onClick={() => handleClickLink("projects")}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      borderRadius: "10px",
                      transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                      "&:hover": {
                        backgroundColor: "#5f6e8833",
                        color: "#B0B0B0",
                      },
                    }}
                  >
                    Projects
                  </Button>
                </Link>

                <Link
                  onClick={() => handleClickLink("about")}
                  to="about"
                  smooth={true}
                  duration={1000}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      borderRadius: "10px",
                      transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                      "&:hover": {
                        backgroundColor: "#5f6e8833",
                        color: "#B0B0B0",
                      },
                    }}
                  >
                    About me
                  </Button>{" "}
                </Link>

                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  onClick={() => handleClickLink("contact")}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      borderRadius: "10px",
                      transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color
                      "&:hover": {
                        backgroundColor: "#5f6e8833",
                        color: "#B0B0B0",
                      },
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <RouterLink to="/blog" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mr: 2,
                      color: "white",
                      display: "block",
                      borderRadius: "10px",
                      transition: "background-color 0.5s, color 0.3s", // Transition for background color and text color

                      "&:hover": {
                        backgroundColor: "#5f6e8833",
                        color: "#B0B0B0",
                      },
                    }}
                  >
                    Blog
                  </Button>
                </RouterLink>
                <Link
                  to="introduction"
                  smooth={true}
                  duration={1000}
                  onClick={() => handleClickLink("introduction")}
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
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
