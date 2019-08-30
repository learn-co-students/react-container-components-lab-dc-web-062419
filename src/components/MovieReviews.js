import React from 'react'

const MovieReviews = (props)=>{
    return <div className='review-list'>
        {props.reviews.map(review=>{
            return <li key={review.display_title} className='review'>
                <a href={review.link.url}> {review.headline} </a> 
                by {review.byline}
            </li>
        })}        
    </div>
}

export default MovieReviews