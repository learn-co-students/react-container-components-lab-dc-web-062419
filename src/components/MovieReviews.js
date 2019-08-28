// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {

    let renderReviews = () => {
       return reviews.map(review => {
            return(
                <div className='review'>
                    <h7>{review.display_title}</h7>
                    <h8>{review.headline}</h8>
                    <a href={review.link.url}>Full Article</a>
                </div>
            )
        })
    }

    return(
        <div className='review-list'>
            {renderReviews()}
        </div>
    )

}

export default MovieReviews