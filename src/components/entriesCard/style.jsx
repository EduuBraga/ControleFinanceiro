import styled, { keyframes } from "styled-components"

export const Container = styled.section`
  
`

const AnimtionCard = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`

export const CardEntrie = styled.div`
  display: grid;
  grid-template: auto / 90% auto;
  align-items:center;
  animation: ${AnimtionCard} 1s ease-out;
`

export const ItemEntrie = styled.div`
  display: grid;
  grid-template: auto / 61% 21% 18%;
  align-items:center;
  gap: 25px;

  margin: 10px 15px ;
  color:  ${({theme})=> theme.color};

  img{
    width: 20px;
  }
`

export const WrapperTrash = styled.div`
  position: relative;

  img:nth-child(1){
    width: 30px;
    cursor: pointer;
    position: absolute;
    opacity: 1;
    z-index: 1;
    transition: all 400ms ease;

    &:active{
      transform: scale(0.95);
    }
    &:hover{
      opacity: 0;
    }
  }

  img:nth-child(2){
    width: 30px;
    cursor: pointer;

    &:active{
      transform: scale(0.95);
    }
  }
`