import React from 'react';
import PropTypes from 'prop-types';
import InputStyled from './InputStyled';

function Input({ ...rest }) {
  return (
    <InputStyled {...rest} />
  );
}

Input.displayName = 'Input';

Input.propTypes = {
};

Input.defaultProps = {
};

export default Input;
