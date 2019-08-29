import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "&api-key=3jTMQGc8jx2HpwddfjGDSlZbTRYQGkkC";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?";

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component{
   
    state= {
        reviews: [],
        searchTerm: ""
    }
   
    inputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

      handleSearch = (event) => {
          event.preventDefault()
        fetch(URL +'query='+ this.state.searchTerm + NYT_API_KEY)
          .then(response => response.json())
          .then(reviews => this.setState({reviews: reviews.results}))
        }

    render(){
   
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={(event) => this.handleSearch(event)}>
                <input onChange={(event) => this.inputChange(event)}/>
                <button>Submit</button>
                </form>
            <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
