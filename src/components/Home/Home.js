import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKEY } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const movirText = "Harry"
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movirText}&type=movie`)
      .catch((error) => {
        console.error('Error :', error);
      });
      dispatch(addMovies(response.data))
     };
    fetchMovies();
  }, [])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home
