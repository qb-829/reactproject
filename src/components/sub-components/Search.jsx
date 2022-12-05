import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import getMovie from '../Movie';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from '../../actions';



export default function Search() {
    const [movieGenre, setMovieGenre] = useState('')

    const movieList = useSelector(addMovie)

    console.log("THE CONSOLE LOG: ", movieList);
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const movieObject = {
        genre:{movieGenre},
        // title: {movieTitle},
        // overview: {movieOverview}
      }
      console.log(movieObject)
      
      dispatch(getMovie)
      dispatch(addMovie(movieObject))
    }

    return <>
        <div>Search</div>
        <Form className="d-flex">
            <Form.Control
                value={movieGenre}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setMovieGenre(e.target.value)}
            />
            <Button variant="outline-success" onClick={(e) => handleSubmit(e)}>Search</Button>
        </Form>

        <div>
            <h1>I have watched:{movieGenre}</h1>
            <div>
                {/* {
                movieList.map((movie) => {
                    return <>
                        <div>
                            <h2>Movie Name: {movie.title.movieTitle}</h2>
                        </div>
                    </>
                })    
                } */}
            </div>
        </div>
    </>
  
}
