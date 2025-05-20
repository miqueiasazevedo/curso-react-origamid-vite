import React from "react";

import { ContainerSlideItem } from "./style";

function SlideItem({ images }) {
  return (
    images &&
    images.map(({ id, download_url, author }) => (
      <ContainerSlideItem key={id}>
        <img src={download_url} alt='' loading='lazy' />
        <h1 onClick={(e) => e.preventDefault()}>{author}</h1>
      </ContainerSlideItem>
    ))
  );
}

export default SlideItem;
