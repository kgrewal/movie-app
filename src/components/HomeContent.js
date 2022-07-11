import { useState } from 'react';
import { Box, Container, Grid } from "@mui/material";
import HomeHero from './HomeHero';
import MoviesGrid from './MoviesGrid';
import PaginationButtons from './PaginationButtons';
import { fetchMovies } from '../api/api';

const HomeContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieResults, setMovieResults] = useState([]);
	const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event) => {
    if (searchQuery) {
      event.preventDefault();
      setLoading(true);
      fetchMovies(searchQuery, 1).then((response) => {
        setMovieResults(response.Results);
        setCount(response.Pages);
      });
      setCurrentPage(1);
      setLoading(false);
    }
  };

  const handlePage = (event, value) => {
    fetchMovies(searchQuery, value).then((response) => {
      setMovieResults(response.Results);
    });
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#333333" }}>
      <Box sx={{ mt: 12, p: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <HomeHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} loading={loading} />
          </Grid>
          <Grid item>
            <Box sx={{ backgroundColor: "#333333" }}>
              <MoviesGrid movieResults={movieResults} loading={loading} setLoading={setLoading} />
            </Box>
          </Grid>
          <Grid item>
            <PaginationButtons handlePage={handlePage} movieResults={movieResults} count={count} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
};

export default HomeContent;