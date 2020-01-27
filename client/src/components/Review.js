import React from "react";
import review from "../images/review.jpg";

function Reviews() {
  return (
    <div className="reviewSection">
      <div id="topReview">
        <img className="reviewImage" src={review} alt="review-image" />
      </div>
      <div id="bottomReview">
        <p className="review">
          “Whether you’re a sirloin or a porterhouse kinda person, Keens is up
          there with the very best restaurants in NYC to get your steak fill.”
        </p>
        <p className="review">VIRGIN HOLIDAY, 2018</p>
      </div>
    </div>
  );
}
export default Reviews;
