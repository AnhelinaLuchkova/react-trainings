import React from 'react';
import PropTypes from 'prop-types';

function PriceText({ text }) {
  return (
    <div
      style={{
        display: 'inline-block',
      }}
    >
      {text}
    </div>
  );
}

PriceText.displayName = 'PriceText';

PriceText.propTypes = {
  text: PropTypes.string,
};

PriceText.defaultProps = {
  text: '',
};

export default PriceText;
