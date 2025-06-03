import React from "react";
import SlideItem from "./SlideItem";

export default function Slide() {
  const [images, setImages] = React.useState(null);

  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  const [dragInicial, setDragInicial] = React.useState(0);
  const [dragPosition, setdragPosition] = React.useState(0);

  const slidesItemsContainer =
    React.useRef(); /* TODO Passar o valor do width deste elemento para uma variável para evitar repetição do código*/

  let slideWidth = 0;

  async function fetchImages() {
    let urlImageList = "https://picsum.photos/v2/list?page=1&limit=5";

    let response = await fetch(urlImageList);
    let json = await response.json();

    setImages(json);
  }

  React.useEffect(() => {
    fetchImages();
  }, []);

  React.useEffect(() => {
    setPosition(
      -(active * slidesItemsContainer.current.getBoundingClientRect().width)
    );
  }, [active]);

  let handlePrevious = () => {
    active > 0
      ? setActive(active - 1)
      : setPosition(
          -(active * slidesItemsContainer.current.getBoundingClientRect().width)
        );
  };

  let handleNext = () => {
    active < images.length - 1
      ? setActive(active + 1)
      : setPosition(
          -(active * slidesItemsContainer.current.getBoundingClientRect().width)
        );
  };

  let handleDragStart = (e) => {
    setDragInicial(e.screenX);
    setdragPosition(e.screenX);
  };

  let handleDragEnd = (e) => {
    let { width } = slidesItemsContainer.current.getBoundingClientRect();
    let draggedMoreAThird = Math.abs(dragInicial - e.screenX) > width / 3;
    let draggedToRight = e.screenX > dragInicial;
    let draggedToLeft = e.screenX < dragInicial;

    if (draggedToLeft && draggedMoreAThird) {
      handleNext();
    } else if (draggedToRight && draggedMoreAThird) {
      handlePrevious();
    } else setPosition(-(active * width));
    /* setPosition(position-(dragInicial - e.screenX)); */
    console.log(
      `arrastou ${dragInicial - e.screenX} px e metade da tela é ${width / 3}`
    );
  };

  let handleDragOver = (e) => {
    setdragPosition(e.screenX);
    console.log(e.screenX + "valor da propriedade do evento");
    console.log(dragPosition + "variavel drag position");
    setPosition(position + (e.screenX - dragPosition) * 2);
    /* 	let {width} = slidesItemsContainer.current.getBoundingClientRect();
		setPosition(-(active * width)); */
    console.log(
      `${e.screenX} - ${dragPosition} resulta em ${e.screenX - dragPosition}`
    );
    /* console.log(e.screenX); */
  };

  return (
    <>
      <hr></hr>
      <details open>
        <summary>
          <h3 style={{ display: "inline" }}>
            Exercícios - Slide - Slide de uma lista de imagens carregadas a
            partir de uma API.
          </h3>
        </summary>
        <p> </p>
        <section>
          <div
            className="w-full h-[40vh] min-h-[350px] relative overflow-hidden group"
            onClick={(e) => e.preventDefault()}>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex"
              style={!false ? { display: "flex" } : { display: "none" }}>
              <span className="w-3 h-3 rounded-full bg-black/40 mx-1 load-bounce" />
              <span
                className="w-3 h-3 rounded-full bg-black/40 mx-1 load-bounce"
                style={{ animationDelay: "0.3s" }}
              />
              <span
                className="w-3 h-3 rounded-full bg-black/40 mx-1 load-bounce"
                style={{ animationDelay: "0.6s" }}
              />
            </div>
            <div
              className="w-full h-full flex transition-all duration-300 ease-linear"
              onClick={(e) => {
                e.preventDefault();
              }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              ref={slidesItemsContainer}
              style={{ transform: `translateX(${position}px)` }}>
              <SlideItem images={images} onClick={(e) => e.preventDefault()} />
            </div>
            <div
              className="w-full flex justify-between px-6 absolute top-1/2 left-0 -translate-y-1/2 opacity-50 transition-opacity duration-200 ease-linear group-hover:opacity-100">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 flex justify-center items-center relative rotate-180">
                &gt;
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 flex justify-center items-center relative">
                &gt;
              </button>
            </div>
          </div>
        </section>
      </details>
    </>
  );
}
