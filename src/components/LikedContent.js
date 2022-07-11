import { Box, Container } from "@mui/material";
import MoviesGrid from './MoviesGrid';

const LikedContent = ({ likedMovies }) => {

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#333333" }}>
      <Box sx={{ mt: 12, p: 4 }}>  
        <MoviesGrid movieResults={likedMovies} />
      </Box>
    </Container>
  )
};

export default LikedContent;