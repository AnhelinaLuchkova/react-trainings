import React from 'react';
import PropTypes from 'prop-types';

function Image({ imageUrl, altText }) {
  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{
        display: 'inline-block',
      }}
    />
  );
}

Image.displayName = 'Image';

Image.propTypes = {
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
};

Image.defaultProps = {
  imageUrl: 'default.png',
  altText: '',
};

export default Image;
