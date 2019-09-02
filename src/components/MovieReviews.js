// Code MovieReviews Here
import React from "react";

const Review = ({
  headline,
  byline,
  link,
  summary_short,
  publication_date
}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br></br>
        <span className="author">{byline} </span>
        <span className="date">{publication_date}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
