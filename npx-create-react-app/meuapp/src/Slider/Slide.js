import React from 'react'
import SlideItem from './SlideItem';
import { SlideContainer, ContainerNavigation, NavigateButton, ItemsContainer, Load} from './style'

export default function Slide() {

    const [images, setImages] = React.useState(null);

    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);

    const slidesItemsContainer = React.useRef();

    async function fetchImages() {
        let urlImageList = 'https://picsum.photos/v2/list?page=1&limit=5';
    
        let response = await fetch(urlImageList);
        let json = await response.json()
        
        setImages(json);
    }

    React.useEffect(() => {
        fetchImages();
    }, []);

    React.useEffect(() => {
        let {width} = slidesItemsContainer.current.getBoundingClientRect();
        setPosition(-(active * width));
    }, [active])

    let handlePrevious = () => {
        if(active > 0) setActive(active -1) ;    
    }

    let handleNext = () => {
        if(active < images.length - 1) setActive(active + 1);
    }

    return (
        <>
      <hr></hr>
      <details open>
        <summary>
          <h3 style={{ display: "inline" }}>
            Exercícios - Slide - Slide de uma lista de imagens carregadas a partir de uma API.
          </h3>
        </summary>
        <p> </p>
        <section>
            <SlideContainer>
                <Load style={!false ? {display:'flex'} : {display: 'none'}}> 
                    <span></span>
                    <span></span>
                    <span></span>
                </Load>
                <ItemsContainer ref={slidesItemsContainer} style={{transform: `translateX(${position}px)`}}>
                    <SlideItem images={images} />
                </ItemsContainer>
                <ContainerNavigation>
                    <NavigateButton onClick={handlePrevious} className="previous"></NavigateButton>
                    <NavigateButton onClick={handleNext} lassName="next"></NavigateButton>
                </ContainerNavigation>
            </SlideContainer>
        </section>
        </details>
        </>
    )
}
