import { useState } from 'react';
import { Box, Container, Grid } from "@mui/material";
import HomeHero from './HomeHero';
import MoviesGrid from './MoviesGrid';
import PaginationButtons from './PaginationButtons';
import { LoadingModal } from './LoadingModal';
import { fetchMovies } from '../api/api';

const HomeContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const handleSearch = (event) => {
    setOpen(true);
    if (searchQuery) {
      event.preventDefault();
      fetchMovies(searchQuery, 1).then((response) => {
        setMovieResults(response.Results);
        setCount(response.Pages);
        setCurrentPage(1);
        setOpen(false);  
      });
    }
    
  };

  const handlePage = (event, value) => {
    setOpen(true);
    fetchMovies(searchQuery, value).then((response) => {
      setMovieResults(response.Results);
      setOpen(false);
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    });
  };

  return (
    <>
    <Container maxWidth="xl" sx={{ backgroundColor: "#333333" }}>
      <Box sx={{ mt: 12, p: { xs: 0, md: 4 } }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <HomeHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
          </Grid>
          <Grid item>
            <Box sx={{ backgroundColor: "#333333" }}>
              <MoviesGrid movieResults={movieResults} />
            </Box>
          </Grid>
          <Grid item>
            <PaginationButtons handlePage={handlePage} movieResults={movieResults} count={count} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Grid>
        </Grid>
      </Box>
    </Container>
    <LoadingModal open={open} />
    </>
  )
};

export default HomeContent;