import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import LikeButton from './LikeButton';
import UnlikeButton from './UnlikeButton';
import { MovieDetailsModal } from './MovieDetailsModal';

export const ActionMenu = ({ movie, movieDetails, index, handleModalOpen, handleModalClose, open }) => {
  const [liked, setLiked] = useState(movie.Liked);

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid item xs={12}>
          <Box alignItems='center' sx={{ mx: 3, my: 1 }}>
          <MovieDetailsModal movieDetails={movieDetails} open={open} handleModalClose={handleModalClose} handleModalOpen={handleModalOpen} />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Box alignItems='center' sx={{ mx: 3, my: 1 }}>
          {liked
            ? <UnlikeButton liked={liked} setLiked={setLiked} movie={movie} index={index} />
            : <LikeButton liked={liked} setLiked={setLiked} movie={movie}/>
          }
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
