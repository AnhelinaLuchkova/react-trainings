import React from 'react';
import PropTypes from 'prop-types';

import {
  Picture, Button, ProductText, PriceText,
} from 'components/controls';

import ProductStyled from './ProductStyled';

function Product({ isBought, ...rest }) {
  return (
    <ProductStyled {...rest}>
      <Picture
        pictureUrl="https://via.placeholder.com/150/56a8c2"
        altText="Sport Boots"
      />
      <ProductText>NAME</ProductText>
      <PriceText>$45</PriceText>
      <Button text="Buy" isDisplayed={!isBought} />
      <Button text="Remove" isDisplayed={isBought} />
    </ProductStyled>
  );
}

Product.displayName = 'Product';

Product.propTypes = {
  isBought: PropTypes.bool,
};

Product.defaultProps = {
  isBought: false,
};

export default Product;
