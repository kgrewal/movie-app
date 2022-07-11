import { Button } from '@mui/material';
import { unlikeMovie } from '../api/api';
import { pink } from '@mui/material/colors';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useRecoilState } from 'recoil';
import likedMoviesState from '../states/states';

const UnlikeButton = ({ movie, index, setLiked }) => {
  const [likedMovies, setLikedMovies] = useRecoilState(likedMoviesState);

  const handleUnlikeButton = () => {
    unlikeMovie(movie.imdbID);
    const likedMoviesArray = likedMovies.filter(movie => movie.imdbID !== likedMovies[index]["imdbID"]);
    setLikedMovies(likedMoviesArray);
    console.log(likedMoviesArray);
    setLiked(false);
  };

  return (
    <Button 
      startIcon={<FavoriteRoundedIcon sx={{ color: pink[500] }} />}
      className="liked-button"
      onClick={handleUnlikeButton} 
      variant="outlined"
      sx={{
        color: pink[500],
        border: "1.5px solid #333333",
        "&:hover": {
          border: "1.5px solid #333333",
          fontWeight: 700
        }
      }}
    >
      Unlike
    </Button>
  )
  
};

export default UnlikeButton;