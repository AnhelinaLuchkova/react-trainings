import styled from 'styled-components';
import PropTypes from 'prop-types';

const Picture = styled.img.attrs({
  src: props => props.pictureUrl,
  alt: props => props.altText,
  title: props => props.altText,
  width: props => props.width,
  height: props => props.height,
})`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
`;

Picture.displayName = 'Picture';

Picture.propTypes = {
  pictureUrl: PropTypes.string,
  altText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Picture.defaultProps = {
  pictureUrl: '',
  altText: PropTypes.string,
  width: '200px',
  height: '200px',
};

export default Picture;
