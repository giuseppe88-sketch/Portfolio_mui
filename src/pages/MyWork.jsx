import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Container,Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
         transition: "transform 0.15s ease-in-out",
         "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
      
    }
  });

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function MyWork() {
    const classes = useStyles()

     return <Box id="projects">
     <Container
              maxWidth="lg"
     >
           <Box
           display="flex"
           flexDirection="row"
           justifyContent="center"
           >
               <Box><Typography variant="h2" sx={{color:"white", mt:20}}>Project</Typography></Box>

           </Box>
     </Container>
     <Grid 
     container
     item
     rowSpacing={3}
     columnSpacing={{ xs:2, sm:2, md:3}}
     columns={{ xs: 4, md: 12 }}
     sx={{mt:5}}
     >
        <Grid item xs={4} >
            <Item><Card className={classes.container}>
      <CardMedia
        component="img"
        height="260"
        image="https://ik.imagekit.io/7lqiq1zm3ks/meetappSS_saBcmV1gj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993069749"
        alt="Meet app"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Meet app
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Within this project, I build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href="https://giuseppe88-sketch.github.io/meet/" underline="none">See the project</Link></Button>
        <Button size="small"> <Link href="https://github.com/giuseppe88-sketch/meet" underline="none">See the github</Link></Button>
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item xs={4}>
            <Item><Card className={classes.container}>
      <CardMedia
        component="img"
        height="260"
        image="https://ik.imagekit.io/7lqiq1zm3ks/sscbdshop_KqLDpImgkv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993298857"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cbd Shop Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Here I have used React.js to build an application, in this case a cbd shop, where the user is able to info different products and adds them to the shop-cart.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href="https://dreamy-wozniak-17d405.netlify.app/" underline="none">See the project</Link></Button>
        
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item xs={4}>
            <Item><Card className={classes.container}>
      <CardMedia
        component="img"
        height="260"
        image="https://ik.imagekit.io/7lqiq1zm3ks/Screenshot_angular_33fZlk1kyv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993298892"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Angular movies Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Here I have used Angular to build the client-side for an application called myMovies based on
               its existing server-side code (REST API and database), with supporting
               documentation.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href="https://giuseppe88-sketch.github.io/myMovies-client-ng/movies" underline="none">See Project</Link></Button>
        <Button size="small"><Link href="https://github.com/giuseppe88-sketch" underline="none">See github</Link></Button>
        
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item xs={4}>
            <Item><Card className={classes.container}>
      <CardMedia
        component="img"
        height="255"
        image="https://ik.imagekit.io/7lqiq1zm3ks/pokeSs_7QJUeZDRUL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643993298173"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Simple js Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Within this project I build a web application with HTML, CSS and JS that load from an external API using FETCH and Promises.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href="https://giuseppe88-sketch.github.io/simple-js-app/" underline="none">See the project</Link></Button>
        <Button size="small"><Link href="https://github.com/giuseppe88-sketch" underline="none">See github</Link></Button>
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item xs={4}>
            <Item><Card className={classes.container}>
      <CardMedia
        component="img"
        height="260"
        image="https://ik.imagekit.io/7lqiq1zm3ks/native_fRnPu1Paw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643993296721"
        alt="Meet app"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Chat App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Here I have build a chat app for mobile devices using React Native. The app will
               provide users with a chat interface and options to share images and their
               location.        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href="https://github.com/giuseppe88-sketch" underline="none">See github</Link></Button>
        
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item xs={4}>
            <Item><Card className={classes.container}>
      <CardMedia
        component="img"
        height="260"
        image="https://ik.imagekit.io/7lqiq1zm3ks/Screenshot_from_2022-02-10_17-02-55_ESudviqaJ1J.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644509142944"
        alt="Time Seven App"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Time Seven App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Within this freelance project I create the server-side and the client-side for an application called Time Seven. I created this project using MERN and Material UI.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><Link href="https://time-seven.netlify.app/" underline="none">See the project</Link></Button>

      </CardActions>
    </Card></Item>
        </Grid>

     </Grid>
</Box>
}