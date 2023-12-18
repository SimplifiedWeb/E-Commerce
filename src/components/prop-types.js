import PropTypes from "prop-types";

export const productHeadingPropTypes = {
  data: PropTypes.string.isRequired,
};

export const productCardPropTypes = {
  category: PropTypes.string.isRequired,
  flexWrap: PropTypes.bool,
};

export const productCardDesignPropTypes = {
  data: PropTypes.shape({
    current_price: PropTypes.number.isRequired,
    original_price: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string,
    product_name: PropTypes.string,
    rating: PropTypes.number,
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};
export const ratingComponentPropTypes = {
  rating: PropTypes.number.isRequired,
};

export const productSecondLayerHeadingPropTypes = {
  check: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  arrow: PropTypes.bool,
};

export const buttonGroupPropTypes = {
  btnType : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
}

export const bannersPropTypes = {
  imagePath : PropTypes.string.isRequired
}