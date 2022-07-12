import { useState } from 'react';
import { Box, Card, CardActions, CardMedia, Divider, Grid, Typography } from '@mui/material';
import { ActionMenu } from './ActionMenu';
import { fetchMovieDetails } from '../api/api';

const MoviesCard = ({ movie, index, setLoading }) => {
  const [open, setOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const handleModalOpen = () => {
    fetchMovieDetails(movie.imdbID).then((response) => setMovieDetails(response));
    setOpen(true);
  } 
  const handleModalClose = () => setOpen(false);
  
  return (
    <>
    <Card 
      sx={{ 
        m: 3, 
        justifyContent: 'center', 
        borderRadius: 2, 
        boxShadow: 5,
        "&:hover": {
          boxShadow: 8
        }
      }}>
      <CardMedia
        component="img"
        height="475"
        width="300"
        image={movie.Poster}
        alt={movie.Title}
        onClick={() => handleModalOpen()}
        sx={{ p: 2 }}
      />
      <Box
        onClick={() => handleModalOpen()}
        sx={{
          alignItems: {
            sm: 'center'
          },
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexGrow: 1,
            pb: 3,
            pr: 4,
            pl: {
              xs: 4,
              sm: 0
            },
            cursor: 'pointer'
          }}
            onClick={() => handleModalOpen()}
        >
          <Box
            sx={{
              flexGrow: 1,
              ml: 3,
              borderRadius: 3
            }}
          >
            <Grid container>
              <Grid
                item
                xs={6}
              >
              </Grid>                
              <Grid
                item
                xs={12}
              >
                <Typography
                  sx={{ 
                    fontSize: '1.5rem',
                    letterSpacing: -1,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    m: 1,
                    mt: 2
                  }}
                >
                  {movie.Title}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Box
                  sx={{ 
                    mx: 1
                  }}
                >
                  Released in {movie.Year}
                </Box>
              </Grid>
                <Typography
                  color="textSecondary"
                  sx={{ 
                    mx: 1
                  }}
                  variant="body2"
                >
                  IMDB #: {movie.imdbID}
                </Typography>
            </Grid>
          </Box>    
        </Box>
      </Box>
      <Divider />
      <CardActions>
        <ActionMenu movie={movie} movieDetails={movieDetails} open={open} index={index} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose} />
      </CardActions>
    </Card>
    </>
  )
};

export default MoviesCard;