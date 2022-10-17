import styled from "styled-components"

export const ContainerHeader = styled.header`
  background-color: var(--color-main);
  color:  #262626;
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

export const ContainerForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 25px;

  border-radius: 4px;
  padding: 12px 8px;
  color:  ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg2}; 

  input{
    background-color: #505050;
    border: none;
    border-radius: 4px;
    padding: 0.5em 0.5em;
    box-sizing: content-box;
    color: ${({ theme }) => theme.color};

    &:focus{
      outline: 2px solid white;
    }
  }

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
  div:nth-child(3){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
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
    font-weight: 700;
    transition: all 0.3s ease-out;

    &:hover{
      background-color: #55CF70;
      color: #f1f1f1;
    }
    &:focus{
      outline: 2px solid white;
    }
  }
`

export const InputRadio = styled.input`
  appearance: none;
  background-color:#00000000 !important;
  border: 2px solid #505050 !important;
  border-radius: 50% !important;
  width: 7px ;
  height: 7px;
  margin-right: 4px;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before{
    content:'';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--color-main);
    opacity: 0;
    transition: all 400ms ease-out;
  }
  &:checked::before{
    opacity: 1;
  }
  &:focus{
    outline: 2px solid white;
  }
`

export const ContainerEntries = styled.section`
  border-radius: 4px;
  padding: 12px 8px;
  color:  ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg2}; 
`

export const HeaderEntries = styled.header`
  display: grid;
  grid-template: auto / 90% auto;
  align-items:center;

  border-bottom: 1px solid #707070;
  padding-bottom: 4px;
  margin: 10px 15px 16px 15px ;
  color:  ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg2}; 
  border-radius: 4px 4px 0px 0px;

  div{
    display: grid;
    grid-template: auto / 60% 20% 20%;
    align-items:center;
    gap: 25px;
    font-size: 20px;
  }
`