import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaMinus } from 'react-icons/fa';
import CounterStyled from './CounterStyled';

function Counter({ isDisplayed }) {
  return (
    isDisplayed && (
      <CounterStyled>
        <button type="button">
          <FaMinus />
        </button>

        <input type="number" />

        <button type="button">
          <FaPlus />
        </button>
      </CounterStyled>
    )
  );
}

Counter.displayName = 'Counter';

Counter.propTypes = {
  text: PropTypes.string,
  isDisplayed: PropTypes.bool,
};

Counter.defaultProps = {
  text: '',
  isDisplayed: true,
};

export default Counter;
