import React from 'react';
import {
import {
  Counter, Picture, Input, Button,
} from 'components/controls';

import {
  Product,
} from 'components/widgets';

function ProductsList() {
  return (
    <main
      style={{
        padding: '20px',
      }}
    >
      <br />

      <Product />

      <br/> <br/>

      <Button text="Buy"/>

      <br/> <br/>

      <Button text="Remove"/>

      <br/> <br/>

      <Counter isDisplayed={true} />

      <br/> <br/>

      <br/> <br/>

      <Picture
        pictureUrl="https://via.placeholder.com/150/92c952"
        altText="Sport Boots"
      />

      <br/> <br/>

      <Input />

    </main>
  );
}

ProductsList.displayName = 'ProductsList';

export default ProductsList;
