import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Home from '../src/components/Home/Home'
import MovieDetail from '../src/components/MovieDetail/MovieDetail'
import PageNotFound from '../src/components/PageNotFound/PageNotFound'

function App() {
  return (
    <>
    <Router>
      <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} path="*"/>
          </Routes>
          <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
