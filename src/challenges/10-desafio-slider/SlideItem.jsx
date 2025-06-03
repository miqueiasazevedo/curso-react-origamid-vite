import React from "react";

/* import { ContainerSlideItem } from "./style"; */

function SlideItem({ images }) {
  return (
    images &&
    images.map(({ id, download_url, author }) => (
      <div
        key={id}
        className="w-full h-full flex-shrink-0 relative bg-black/30">
        <img
          src={download_url}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <h1
          className="font-mono text-2xl md:text-5xl text-white text-center m-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ textShadow: "0px 0px 50px rgba(0,0,0,1)" }}
          onClick={(e) => e.preventDefault()}>
          {author}
        </h1>
      </div>
    ))
  );
}

export default SlideItem;
