import styled, {keyframes} from "styled-components"

const AnimtionCard = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`

export const Container = styled.form`
  animation: ${AnimtionCard} 1s ease-out;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 25px;
  
  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 12px;
  }

  border-radius: 4px;
  padding: 12px 8px;
  color:  ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg2}; 

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
    
    label{
      margin-right: 7px;
    }
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
  width: 24px ;
  height: 24px;
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

export const InputText = styled.input`
  background-color: #505050;
  border: none;
  border-radius: 4px;
  padding: 0.5em;
  color: ${({ theme }) => theme.color};

  @media screen and (max-width: 768px){
    width: 80vw;
  }

  &:focus{
    outline: 2px solid white;
  }
`