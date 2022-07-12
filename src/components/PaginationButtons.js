import { Pagination, Stack } from '@mui/material';

const PaginationButtons = ({ handlePage, count, movieResults, currentPage, setCurrentPage }) => {
  if (movieResults.length > 0) {
    return (
      <Stack spacing={2} sx={{ my: 3 }}>
        <Pagination 
          color="primary" 
          count={count}
          page={currentPage} 
          onChange={(event, value) => {
            handlePage(event, value);
            setCurrentPage(value);
          }}
          showFirstButton 
          showLastButton 
        />
      </Stack>
    )
  };
}; 

export default PaginationButtons;