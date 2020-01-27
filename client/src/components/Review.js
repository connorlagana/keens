import React from 'react';
import review from "../images/review.jpg"

function Reviews() {
  return (
    <div className="reviewSection">
      <img className="reviewImage" src={review} alt="review-image"></img>
      <p className="review"> “Whether you’re a sirloin or a porterhouse kinda person, Keens is
      up there with the very best restaurants in NYC to get your steak fill.”
      VIRGIN HOLIDAY, 2018  </p>
    </div>
  )
}
export default Reviews