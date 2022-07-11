import { atom } from 'recoil';

const likedMoviesState = atom({
    key: 'likedMoviesState',
    default: []
});

export default likedMoviesState;