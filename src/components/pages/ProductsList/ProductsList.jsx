import React from 'react';

import { AddButton, Counter, Image, ImageLabelText, PriceText, Picture } from 'components/controls';
import Button from 'components/controls/Button/Button';

function ProductsList() {
  return (
    <main>
      <br/>
      <Button>Some button</Button>
      <br/>
      <br/>
      <AddButton isDisplayed />
      <Counter isDisplayed={true} />
      <Image
        imageUrl="https://via.placeholder.com/150/92c952"
        altText="Sport Boots"
      />
      <Picture
        pictureUrl="https://via.placeholder.com/150/92c952"
        altText="Sport Boots"
      />
      <ImageLabelText text="Boots" />
      <PriceText text="$45" />
    </main>
  );
}

ProductsList.displayName = 'ProductsList';

export default ProductsList;
