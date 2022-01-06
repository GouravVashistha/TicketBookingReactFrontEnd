import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Container>

      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="300"
                  width="350"
                  image="./images/avengers.jpg"
                  alt="avengers"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Avengers
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Avengers is a superhero film and the sixth film in the Marvel Cinematic Universe
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" disableElevation>
                    Book Ticket
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>

            <Item>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="300"
                  width="350"
                  image="./images/shershaah.jpg"
                  alt="shershaah"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Shershaah
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Shershaah is an action movie which is based on true story
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" disableElevation>
                    Book Ticket
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item><Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="300"
                width="350"
                image="./images/Thor.jpg"
                alt="Thor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thor
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Thor is an American superhero film based on the Marvel Comics character of the same name
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" disableElevation>
                  Book Ticket
                </Button>
              </CardActions>
            </Card>

            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item><Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="300"
                width="350"
                image="./images/Agent47.jpg"
                alt="Agent47"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Agent 47
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Agent 47 is an American action thriller film directed by Aleksander Bach
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" disableElevation>
                  Book Ticket
                </Button>
              </CardActions>
            </Card>


            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item><Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                height="300"
                width="350"
                image="./images/spiderman.jpg"
                alt="Spiderman"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spiderman
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The fictional character Spider-Man, a comic book superhero created by Stan Lee and Steve
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" disableElevation>
                  Book Ticket
                </Button>
              </CardActions>
            </Card>

            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="300"
                  width="350"
                  image="./images/CivilWar.jpg"
                  alt="Civil War"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Civil War
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Civil War is a superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button className ="primary"size="small">Book Ticket</Button> */}
                  <Button variant="contained" disableElevation>
                    Book Ticket
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>

  );
}

/*function Avengers() {
         
    return ( 
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        width="300"
        image ="./images/avengers.jpg"
        alt="avengers"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Avengers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Shershaah is an action movie which is based on true story 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Ticket</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  
    );
  }
  export default Avengers; */
