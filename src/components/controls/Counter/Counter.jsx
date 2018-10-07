import React from 'react';
import PropTypes from 'prop-types';

function Counter({ isDisplayed }) {
  return (
    isDisplayed && (
      <div>
        <button
          type="button"
          style={{
            display: 'inline-block',
          }}
        >
          -
        </button>

        <div
          type="button"
          style={{
            display: 'inline-block',
          }}
        >
          2
        </div>

        <button
          type="button"
          style={{
            display: 'inline-block',
          }}
        >
          +
        </button>
      </div>
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
