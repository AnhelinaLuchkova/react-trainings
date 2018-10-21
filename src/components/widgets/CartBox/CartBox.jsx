import React from 'react';
import PropTypes from 'prop-types';

import { CartBoxText } from 'components/controls';
import CartBoxStyled from './CartBoxStyled';

function CartBox({ itemsCount }) {
  return (
    <CartBoxStyled>
      <CartBoxText>{itemsCount}</CartBoxText>
    </CartBoxStyled>
  );
}

CartBox.displayName = 'CartBox';

CartBox.propTypes = {
  itemsCount: PropTypes.number,
};

CartBox.defaultProps = {
  itemsCount: 0,
};

export default CartBox;
