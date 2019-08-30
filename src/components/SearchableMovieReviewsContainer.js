import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

    state = {
        reviews: [],
        searchTerm: ''
    }

    inputChange = (event) => {
        event.preventDefault()
        fetch(URL)
        .then(res => res.json())
        .then(reviews => this.setState({reviews: reviews.results}))
    }
    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={(event) => this.handleSearch(event)}>
                <input onChange={(event) => this.handleChange(event)}/>
                <button>Submit</button>
            </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}


export default SearchableMovieReviewsContainer