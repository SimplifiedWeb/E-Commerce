import { ratingComponentPropTypes } from "../../prop-types";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";

const Rating = React.memo(({ rating }) => {
  const renderRatingStars = () => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const starsArray = Array.from({ length: 5 }, (_, index) => {
      if (index < filledStars) {
        return (
          <StarIcon
            key={index}
            className="text-yellow-500"
            style={{ width: "17px" }}
          />
        );
      } else if (index === filledStars && hasHalfStar) {
        return (
          <StarHalfIcon
            key={index}
            className="text-yellow-500"
            style={{ width: "17px" }}
          />
        );
      } else {
        return (
          <StarBorderIcon
            key={index}
            className="text-gray-500"
            style={{ width: "17px" }}
          />
        );
      }
    });

    return <div className="flex">{starsArray}</div>;
  };

  return (
    <>
      <div className="flex w-full  items-center">
        {renderRatingStars()}
        <span className="ml-1 text-xs text-[#9a9a9a]">
          ({Math.floor(Math.random() * 200) * 7})
        </span>
      </div>
    </>
  );
});

Rating.propTypes = ratingComponentPropTypes;
Rating.displayName = "Rating";

export default Rating;
