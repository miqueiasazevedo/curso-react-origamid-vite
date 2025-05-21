import React from "react";
import SlideItem from "./SlideItem";
import {
  SlideContainer,
  ContainerNavigation,
  NavigateButton,
  ItemsContainer,
  Load,
} from "./style";

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
          <SlideContainer onClick={(e) => e.preventDefault()}>
            <Load style={!false ? { display: "flex" } : { display: "none" }}>
              <span></span>
              <span></span>
              <span></span>
            </Load>
            <ItemsContainer
              onClick={(e) => {
                e.preventDefault();
              }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              ref={slidesItemsContainer}
              style={{ transform: `translateX(${position}px)` }}>
              <SlideItem images={images} onClick={(e) => e.preventDefault()} />
            </ItemsContainer>
            <ContainerNavigation>
              <NavigateButton
                onClick={handlePrevious}
                className='previous'></NavigateButton>
              <NavigateButton
                onClick={handleNext}
                className='next'></NavigateButton>
            </ContainerNavigation>
          </SlideContainer>
        </section>
      </details>
    </>
  );
}
