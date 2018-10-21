import React from 'react';

import { Picture, Input, Button } from 'components/controls';
import { Product, Counter } from 'components/widgets';
import Header from 'components/widgets/Header/Header';
import CatalogStyled from './CatalogStyled';

function Catalog() {
  return (
    <CatalogStyled>
      <Header pageName="Catalog" isCartBoxDisplayed />

      <Product />

      <Button text="Buy" />

      <Button text="Remove" />

      <Counter isDisplayed />

      <Picture
        pictureUrl="https://via.placeholder.com/150/92c952"
        altText="Sport Boots"
      />

      <Input />
    </CatalogStyled>
  );
}

Catalog.displayName = 'Catalog';

export default Catalog;
