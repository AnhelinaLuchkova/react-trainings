import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

function Button({ text, isDisplayed }) {
  return (
    isDisplayed && (
      <ButtonStyled>
        {text}
      </ButtonStyled>
    )
  );
}

Button.displayName = 'Button';

Button.propTypes = {
  text: PropTypes.string,
  isDisplayed: PropTypes.bool,
};

Button.defaultProps = {
  text: '',
  isDisplayed: true,
};

export default Button;
