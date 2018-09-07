import React from 'react';

import { AddButton, Counter, Image, ImageLabelText, PriceText } from 'components/controls';

function GoodsList() {
  return (
    <main>
      <AddButton isDisplayed="true" />
      <Counter isDisplayed="true" />
      <Image
        imageUrl="https://www.revzilla.com/product_images/0066/7519/tcxx_square_sport_boots_black.jpg"
        altText="Sport Boots"
      />
      <ImageLabelText text="Boots" />
      <PriceText text="$45" />
    </main>
  );
}

GoodsList.displayName = 'GoodsList';

export default GoodsList;
