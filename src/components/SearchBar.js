import { Box, TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
	return (
	  <Box>
			<TextField
				variant="filled"
				onChange={(event) => setSearchQuery(event.target.value)}
				placeholder='Type a movie title here...'
				value={searchQuery}
			/>
	  </Box>
	);
};

export default SearchBar;