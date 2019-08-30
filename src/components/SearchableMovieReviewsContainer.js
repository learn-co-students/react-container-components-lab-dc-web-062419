import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: '',
  };

  handleInput = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const URL =
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}?` +
      `api-key=${NYT_API_KEY}`;
    fetch(URL)
      .then(res => res.json())
      .then(console.log);
  };
  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>SearchableMovieReviewsContainer</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleInput} />
        </form>
        <div className="reviews">
          {this.state.reviews.map(review => (
            <MovieReviews review={review} />
          ))}
        </div>
      </div>
    );
  }
}
