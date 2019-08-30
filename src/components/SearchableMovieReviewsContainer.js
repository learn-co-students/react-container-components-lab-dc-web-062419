import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?query='

export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSearchChange = (event)=>{
        this.setState({
            searchTerm: event.target.value
        })
    }


    getReviews = (event)=>{
        event.preventDefault()
        fetch(`${URL}`+`${this.state.searchTerm.split(' ').join('_')}`+`&api-key=${NYT_API_KEY}`)
        .then(res=>res.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <h3>Search for movie reviews</h3>
                <form onSubmit={this.getReviews}>
                    <input value={this.state.searchTerm} 
                        onChange={this.handleSearchChange}
                    />
                </form>
                
                <MovieReviews reviews={this.state.reviews} /> 
            </div>
        )
    }
}