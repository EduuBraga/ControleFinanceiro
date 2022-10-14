import styled from "styled-components"

export const ContainerHeader = styled.header`
  background-color: var(--color-main);
  color:  #101010;
  padding: 15px 10px 45px 10px;
  text-align: center;
`

export const ContainerMain = styled.main`
  max-width: 768px;
  margin: 0 auto;
  transform: translateY(-30px);
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ContainerCardsControls = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  div{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 90px;
    color:  ${({theme})=> theme.color};
    background-color: ${({theme})=> theme.bg2}; 
    border-radius: 4px;
  }
`

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;

  border-radius: 4px;
  padding: 12px 8px;
  color:  ${({theme})=> theme.color};
  background-color: ${({theme})=> theme.bg2}; 

  div:nth-child(1){
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  div:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  div:nth-child(3) input{
    margin-right: 5px;
    margin-left: 5px;
  }
  label{
    font-size: 14px;
  }
  button{
    padding: 0.5em 1em;
    background-color: var(--color-main);
    color: #fefef1;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius:4px;
  }
`


export const ContainerEntries = styled.section`
  border-radius: 4px;
  padding: 12px 8px;
  color:  ${({theme})=> theme.color};
  background-color: ${({theme})=> theme.bg2}; 
`

export const HeaderEntries = styled.header`
  display: grid;
  grid-template: auto / 90% auto;
  align-items:center;

  border-bottom: 1px solid #707070;
  padding-bottom: 4px;
  margin: 10px 15px 16px 15px ;
  color:  ${({theme})=> theme.color};
  background-color: ${({theme})=> theme.bg2}; 
  border-radius: 4px 4px 0px 0px;

  div{
    display: grid;
    grid-template: auto / 60% 20% 20%;
    align-items:center;
    gap: 25px;
    font-size: 20px;
  }
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