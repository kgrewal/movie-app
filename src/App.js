import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LikedMovies from './pages/LikedMovies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/liked" element={<LikedMovies />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  )
};

export default App;
