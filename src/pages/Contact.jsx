import React from 'react';
import { Typography } from '@mui/material';
import { Container,Grid,Box,Link} from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {MdEmail} from 'react-icons/md'
import {IoIosPhonePortrait} from 'react-icons/io'
import {AiOutlineLinkedin,AiFillTwitterSquare} from 'react-icons/ai';
import {FaGithubSquare} from 'react-icons/fa'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    container: {
         transition: "transform 0.15s ease-in-out",
         "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
      
    },
  });



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize:90,
    margin:75,
    
  }));

export default function Contact() {
    const classes = useStyles()

  return <Box sx={{height:750}}>
<Container maxWidth="fluid"
className={classes.container}

>
            <Box display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
         
                    >
                <Typography variant="h2" sx={{color:'white',mt:15}}>Contact</Typography>
            </Box>  
        <Grid 
            container
            columns={10}
            columns={{ xs: 2,md:10}}
            alignItems="center"
            sx={{mt:5}}> 

         <Grid item xs={2}>
             <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                >
                    <Link href="mailto:giuseppeadamo908@gmail.com"><Item className={classes.container}><MdEmail /></Item><Typography variant="h7" sx={{color:"white"}}><i>giuseppeadamo908@gmail.com</i></Typography></Link>
         </Box>
         </Grid>

         <Grid item xs={2}>
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                >
                <Link href="tel:+491785049284"><Item className={classes.container}><IoIosPhonePortrait /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>01785049284</i></Typography></Link> 

                </Box>
         </Grid>
         <Grid item xs={2}>
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                >
                <Link href="https://www.linkedin.com/in/giuseppe-adamo-798900223/"><Item className={classes.container}><AiOutlineLinkedin /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>Connect here</i></Typography></Link>

                </Box>
         </Grid>
         <Grid item xs={2}>
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                >
                 <Link href="https://twitter.com/home"><Item className={classes.container}><AiFillTwitterSquare /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>Follow me</i></Typography></Link>

                </Box>
         </Grid>
         <Grid item xs={2}>
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                >
                <Link href="https://github.com/giuseppe88-sketch"><Item className={classes.container}><FaGithubSquare /></Item><Typography sx={{color:"white", textAlign:"center"}}><i>Found me here</i></Typography></Link>

                </Box>
         </Grid>
         </Grid>
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

    

</Container>
  </Box>;
}
