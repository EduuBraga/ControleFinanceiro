import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const CardsStatistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 90px;
  color:  ${({theme})=> theme.color};
  background-color: ${({theme})=> theme.bg2}; 
  border-radius: 4px;

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