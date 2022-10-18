import styled, { keyframes } from "styled-components"

const AnimtionCard = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`

export const Container = styled.section`
  display: grid;
  grid-template: auto / 4fr 2fr;
  gap: 30px;

  @media screen and (max-width: 768px){
    grid-template: auto auto / auto ;
    gap: 30px;
  }
`

export const ContainerCardTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const CardsStatistic = styled.div`
  animation: ${AnimtionCard} 1s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 90px;
  color:  ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg2}; 
  border-radius: 4px;

  @media screen and (max-width: 768px){
    
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  article{
    font-weight: bold;
    font-size: 18px;
  }

  img{
    width: 22px;
  }
`