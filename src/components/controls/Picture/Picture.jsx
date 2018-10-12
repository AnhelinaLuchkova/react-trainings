import styled from 'styled-components';
import PropTypes from 'prop-types';

const Picture = styled.img.attrs({
  src: props => props.pictureUrl,
  alt: props => props.altText,
  title: props => props.altText,
  width: props => props.width,
  height: props => props.height,
})`
  -webkit-transition: 1s;
  -moz-transition: 1s;
  transition: 1s;

  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;

  :hover {
    -webkit-box-shadow: 0 0 20px rgba(0,0,255,.6), inset 0 0 20px rgba(0,0,255,1);
    -moz-box-shadow: 0 0 20px rgba(0,0,255,.6), inset 0 0 20px rgba(0,0,255,1);
    box-shadow: 0 0 20px rgba(0,0,255,.6), inset 0 0 20px rgba(0,0,255,1);

    -webkit-border-radius: 60em;
    -moz-border-radius: 60em;
    border-radius: 60em;
  }
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
  width: '150px',
  height: '150px',
};

export default Picture;
