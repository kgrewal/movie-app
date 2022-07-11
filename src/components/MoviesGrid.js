import React from 'react';
import MoviesCard from './MoviesCard';
import LoadingMoviesCard from './LoadingMoviesCard';
import { Grid, Fade } from '@mui/material';

const MoviesGrid = ({ movieResults, loading, setLoading }) => {
	if (movieResults) {
	  return (
		<>
		<Grid container justifyContent="center">
		  {movieResults.map((movie, index) => (
				<Fade key={index} appear={true} in timeout={index*500}>
					<Grid item xs={12} md={6} lg={4}>
						<MoviesCard movie={movie} index={index} setLoading={setLoading} />
					</Grid>
				</Fade>
		  ))}
		</Grid>
		</>
	  )
	} else if (loading) {
	  <>
		<Grid container justifyContent="center">
			<Grid item xs={12} md={4}>
			  <LoadingMoviesCard />
			</Grid>
			<Grid item xs={12} md={4}>
			  <LoadingMoviesCard />
			</Grid>
			<Grid item xs={12} md={4}>
			  <LoadingMoviesCard />
			</Grid>
		</Grid>		
	  </>
	}
};

export default MoviesGrid;