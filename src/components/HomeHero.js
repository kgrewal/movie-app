import { Box, Typography } from "@mui/material";
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

const HomeHero = ({ searchQuery, setSearchQuery, handleSearch, loading }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          mb: 2, 
          color: "#FFFFFF", 
          fontWeight: 700, 
          letterSpacing: -2.5, 
          lineHeight: 1 
        }}>
          Search for a Movie Now
      </Typography>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchButton searchQuery={searchQuery} handleSearch={handleSearch} loading={loading} />
    </Box>
  )
};

export default HomeHero;