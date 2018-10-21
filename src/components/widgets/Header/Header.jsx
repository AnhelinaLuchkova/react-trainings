import React from 'react';
import PropTypes from 'prop-types';

import { CartBox } from 'components/widgets';
import { LogoText, PageNameText } from 'components/controls';
import HeaderStyled from './HeaderStyled';

function Header({ pageName, isCartBoxDisplayed }) {
  return (
    <HeaderStyled>
      <LogoText>SPORTS STORE</LogoText>
      <PageNameText>{pageName}</PageNameText>
      { isCartBoxDisplayed && (<CartBox />) }
    </HeaderStyled>
  );
}

Header.displayName = 'Header';

Header.propTypes = {
  pageName: PropTypes.string,
  isCartBoxDisplayed: PropTypes.bool,
};

Header.defaultProps = {
  pageName: '',
  isCartBoxDisplayed: false,
};

export default Header;
