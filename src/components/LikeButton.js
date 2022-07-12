import { Button } from '@mui/material';
import { likeMovie } from '../api/api';
import { pink } from '@mui/material/colors';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const LikeButton = ({ movie, setLiked }) => {
  const handleLikeButton = () => {
    likeMovie(movie.imdbID);
    setLiked(true);
  };

  return (
    <Button 
      startIcon={<FavoriteBorderRoundedIcon sx={{ color: pink[500] }} />}
      className="like-button"
      onClick={handleLikeButton} 
      variant="outlined"
      sx={{
        color: pink[500],
        border: "1.5px solid #333333",
        transition: "0.3s",
        "&:hover": {
          border: "1.5px solid #333333",
          fontWeight: 700
        }
      }}
    >
      Like
    </Button>
  )
};

export default LikeButton;