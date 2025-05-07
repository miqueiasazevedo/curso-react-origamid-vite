import styled, { keyframes } from 'styled-components';

export const SlideContainer = styled.div `
    width: 100%;
    height: 40vh;
    min-height: 350px;

    position: relative;

    overflow: hidden;
`;

export const ItemsContainer = styled.div `
    width: 100%;
    height: 100%;

    display: flex;

    transition: .3s linear;
`;

export const ContainerSlideItem = styled.div`
    width: 100%;
    height: 100%;

    flex-shrink: 0;

    position: relative;

    background: rgba(0,0,0,.3);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1{
        font-family: 'Courier New', Courier, monospace;
        font-size: 3rem;
        color: #fff;
        text-shadow: 0px 0px 50px rgba(0,0,0,1);
        text-align:center;

        margin: 0;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        @media(max-width: 768px) {
            font-size: 1.5rem;
        }
    }
`;

export const ContainerNavigation = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 0 1.5rem;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    opacity: .5;
    transition: .2s linear;

    ${SlideContainer}:hover & {
        opacity: 1;
    }
` ;

export const NavigateButton = styled.button`
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items:center;

    position: relative;

    &.previous{
        transform: rotate(180deg);
    }

    &::Before{
        content: '>';

        display: block;
        
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
    }
` ;


const LoadAnimate = keyframes`
    to{
        transform: translateY(-3rem);
    }
`

export const Load = styled.div`
    display: flex;

    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    span{
        width: .7rem;
        height: .7rem;

        display: block;
        margin: auto.5rem;
        border-radius: 50%;

        background: rgba(0,0,0,.4);

        animation: ${LoadAnimate} 1s alternate infinite ;
        &:nth-child(2){animation-delay: .3s}
        &:nth-child(3){animation-delay: .6s}


    }
`

