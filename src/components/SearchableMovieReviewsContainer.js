import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URLStart = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query="
const URLEnd = "&api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ"
    // eg: https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    };
    
    updateSearchTerm = event => {
        this.setState({searchTerm: event.target.value.replace(/ /g,"%20")})
    };

    handleSubmit = event => {
        event.preventDefault()
        const URL = URLStart.concat(this.state.searchTerm,URLEnd)
        fetch(URL)
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
    };

    render() { 
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.updateSearchTerm} 
                        placeholder="Search for..."></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}
 
export default SearchableMovieReviewsContainer;