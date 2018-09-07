import React from 'react';
import PropTypes from 'prop-types';

function ImageLabelText({ text }) {
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

ImageLabelText.displayName = 'ImageLabelText';

ImageLabelText.propTypes = {
  text: PropTypes.string,
};

ImageLabelText.defaultProps = {
  text: '',
};

export default ImageLabelText;
