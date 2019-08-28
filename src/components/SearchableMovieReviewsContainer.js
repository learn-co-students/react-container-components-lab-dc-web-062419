import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'aZqGUjj3C4SYGIVwJGjKGxcDVvpBmcAm';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

            // + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    changeSearch = (e) => {
        this.setState({
            ...this.state,
            searchTerm: e.target.value
        })
    }

    handleSearch = (e) => {
        e.preventDefault()
        fetch(`${URL}` + `${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`).then(resp => resp.json()).then(data =>  this.setState({...this.state, reviews: data.results}))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={(e) => this.handleSearch(e)}>
                <input type='text' name='searchTerm' placeholder="search" onChange={(e) => this.changeSearch(e)}></input>
                <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
