import styled from "styled-components"

export const Container = styled.section`
  
`

export const CardEntrie = styled.main`
  display: grid;
  grid-template: auto / 90% auto;
  align-items:center;
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
  img{
    width: 30px;
  }
`