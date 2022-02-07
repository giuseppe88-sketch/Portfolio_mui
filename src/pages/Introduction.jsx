import React from 'react';
import Box from '@mui/material/Box';
import { Typography,Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { grey } from '@mui/material/colors';
import Link from '@mui/material/Link';

export default function Introduction() {
  return <>
      
    <Box display="flex" width="50%" justifyContent="center" alignItems="center" m="auto" sx={{mt:20}}>
              <Box sx={{mr:10}}>
              <Typography variant="h3"sx={{color:'white'}}>Hey, I am Giuseppe</Typography>
              <Typography variant="h6" sx={{color:'white',mt:1}}>an Italian Web Developer based in Berlin.</Typography>

              </Box>
            <Box>
               <img src="https://ik.imagekit.io/7lqiq1zm3ks/IMG_1419a_ikoAWbRgxF.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1643972203775" width="100%"></img>
            </Box>
        </Box>
        <Box width="50%" margin="auto" sx={{mt:10}}>
        <Container align="center">
        <Link href="https://github.com/giuseppe88-sketch"><GitHubIcon sx={{color:grey[500]}} fontSize="large" /></Link>
       <Link href="https://www.linkedin.com/in/giuseppe-adamo-798900223/"><LinkedInIcon  color="primary" fontSize="large" sx={{ml:2}}/></Link> 
        <Link href="https://twitter.com/home"><TwitterIcon color="primary" fontSize="large" sx={{ml:2}}/></Link>
       </Container> 
       </Box>
  </>;
}
