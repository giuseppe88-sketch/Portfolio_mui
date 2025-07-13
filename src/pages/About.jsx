// import React from "react";
// import { Container, Grid, Box } from "@mui/material";

// import { Typography } from "@mui/material";

// import HexagonalPrism from "../components/HexagonLogo";

// export default function About() {
//   const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Box id="about" height="100%" mb={isMobile ? 4 : 10}>
//       <Container maxWidth="sm">
//         <Box display="flex" flexDirection="row" justifyContent="center">
//           <Typography
//             variant={isMobile ? "h3" : "h2"}
//             sx={{ color: "white", mt: 8 }}
//           >
//             About Me
//           </Typography>
//         </Box>
//       </Container>
//       <Container sx={{ mt: isMobile ? 5 : 8 }}>
//         <Grid container item columns={{ xs: 4, md: 12 }}>
//           <Grid item xs={4}>
//             {!isMobile && (
//               <Box>
//                 <HexagonalPrism />
//               </Box>
//             )}
//           </Grid>
//           <Grid item xs={7} alignItems="center">
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "white",
//                 ml: !isMobile ? 7 : 2,
//                 mr: !isMobile ? 7 : 2,
//                 mt: 1,
//                 alignItems: "center",
//               }}
//             >
//               Because I have lived in different european cities, I like to call
//               many places 'home'. Born in 1988 and raised in Italy, I began my
//               journey to independence in my early 20s by living in London, then
//               in Spain, then here in Berlin.
//               <br></br>
//               Passionate about traveling and discovering new cultures, I am now
//               pursuing my passion to become a Software Developer.
//               <br></br>
//               In 2021, I graduated from CareerFoundry after completing an
//               8-month Bootcamp. Shortly after, I secured my first junior
//               position at a cloud-based software solutions company, where I
//               worked for 2 years.
//               <br></br>
//               Over those years, I've honed my skills as a front-end developer
//               while also gaining experience in mobile development and backend
//               technologies.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }
import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import HexagonalPrism from "../components/HexagonLogo";
import { motion } from "framer-motion";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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

  return (
    <Box
      id="about"
      height="100%"
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      mb={isMobile ? 4 : 10}
    >
      <Container maxWidth="sm">
        <Box display="flex" justifyContent="center">
          {/* <Typography
            variant={isMobile ? "h3" : "h2"}
            sx={{ color: "white", mt: 8 }}
          >
            About Me
          </Typography> */}
          <Typography
            variant={isMobile ? "h3" : "h2"}
            component={motion.div}
            variants={cardVariants}
            sx={{
              color: "white",
              fontWeight: "500",
              mb: 2,
              mt: 6,
            }}
          >
            About{" "}
          </Typography>
        </Box>
      </Container>

      <Container sx={{ mt: isMobile ? 5 : 8 }}>
        <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
          <Grid item xs={4}>
            {!isMobile && (
              <Box display="flex" justifyContent="center">
                <HexagonalPrism />
              </Box>
            )}
          </Grid>

          <Grid item xs={isMobile ? 4 : 8}>
            <Typography
              variant="h6"
              component={motion.div}
              variants={cardVariants}
              sx={{
                color: "white",
                mx: isMobile ? 2 : 7,
                mt: 1,
                lineHeight: 1.6,
              }}
            >
              Because I have lived in different European cities, I like to call
              many places 'home'. Born in 1988 and raised in Italy, I began my
              journey to independence in my early 20s by living in London, then
              in Spain, then here in Berlin.
              <Box component="p" mt={2}>
                Passionate about traveling and discovering new cultures, I now
                build things that work and solve problems as a Software
                Developer.
              </Box>
              <Box component="p" mt={2}>
                In 2021, I graduated from CareerFoundry after completing an
                8-month Bootcamp as Full-Stack developer. Shortly after, I secured my first junior
                position at a cloud-based software solutions company, where I
                worked for 2 years. Currently now freelancing, continuing to grow my skills by building real-world applications
              </Box>
              <Box component="p" mt={2}>
                Over those years, I've honed my skills as a front-end developer
                while also gaining experience in mobile development and backend
                technologies.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
