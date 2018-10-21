import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayoutStyled from './DefaultLayoutStyled';

function DefaultLayout({ pageName }) {
  return (
    <DefaultLayoutStyled>
      {pageName}
    </DefaultLayoutStyled>
  );
}

DefaultLayout.displayName = 'DefaultLayout';

DefaultLayout.propTypes = {
  pageName: PropTypes.string,
};

DefaultLayout.defaultProps = {
  pageName: '',
};

export default DefaultLayout;
