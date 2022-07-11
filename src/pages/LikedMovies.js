import { useEffect } from 'react';
import { Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LikedContent from '../components/LikedContent';
import NoLikedContent from '../components/NoLikedContent';
import { useRecoilState } from 'recoil';
import likedMoviesState from '../states/states';
import axios from 'axios';

const LikedMovies = () => {
  const [likedMovies, setLikedMovies] = useRecoilState(likedMoviesState);

  useEffect( () => {
    axios.get("http://127.0.0.1:5000/api/get_liked_movies").then((response) => setLikedMovies(response.data.Results));
  }, []
  );

  if (likedMovies.length > 0) {
    return (
      <>
        <Header />
        <LikedContent likedMovies={likedMovies} />
        <Footer />
      </>
    );
  } else if (likedMovies.length === 0) {
    return (
    <>
      <Header />
      <NoLikedContent />
      <Footer />
    </>
    )
  }
};

export default LikedMovies;
