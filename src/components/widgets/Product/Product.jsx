import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from 'components/theme/images/shoe-icon.svg';
// https://via.placeholder.com/150/56a8c2

import {
  Picture, Button, ProductText, PriceText,
} from 'components/controls';

import ProductStyled from './ProductStyled';

function Product({ isBought, ...rest }) {
  return (
    <ProductStyled {...rest}>
      <Picture
        pictureUrl={defaultImg}
        altText="Sport Boots"
      />
      <ProductText>Awesome boots</ProductText>
      <div>
        <PriceText>$45</PriceText>
        <Button text="Buy" isDisplayed={!isBought} />
        <Button text="Remove" isDisplayed={isBought} />
      </div>
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
