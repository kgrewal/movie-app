import React from 'react';
import MoviesCard from './MoviesCard';
import { Grid, Fade } from '@mui/material';

const MoviesGrid = ({ movieResults }) => {
	return (
		<>
		<Grid container justifyContent="center">
		  {movieResults.map((movie, index) => (
				<Fade key={index} appear={true} in timeout={index*500}>
					<Grid item xs={12} md={6} lg={4}>
						<MoviesCard movie={movie} index={index} />
					</Grid>
				</Fade>
		  ))}
		</Grid>
		</>
	)
};

export default MoviesGrid;