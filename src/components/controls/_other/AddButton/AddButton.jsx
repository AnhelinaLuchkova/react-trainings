import React from 'react';
import PropTypes from 'prop-types';

function AddButton({ isDisplayed }) {
  return (
    isDisplayed && (
      <button
        type="button"
        style={{
          display: 'inline-block',
        }}
      >
        +
      </button>
    )
  );
}

AddButton.displayName = 'AddButton';

AddButton.propTypes = {
  isDisplayed: PropTypes.bool,
};

AddButton.defaultProps = {
  isDisplayed: true,
};

export default AddButton;
