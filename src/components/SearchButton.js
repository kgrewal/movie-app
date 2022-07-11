import { Button } from '@mui/material';

const SearchButton = ({ handleSearch, loading }) => {
  if (!loading) {
    return (
      <Button 
        onClick={handleSearch} 
        size="large" 
        variant="contained" 
        sx={{ 
          mt: 2, 
          fontSize: "1rem" 
        }}>
          Search Movie
      </Button>
    )
  } else {
    return (
      <Button 
        disabled 
        size="large" 
        variant="contained" 
        sx={{ 
          mt: 2, 
          fontSize: "1rem" 
        }}>
          Loading...
      </Button>
    )
  }
};

export default SearchButton;