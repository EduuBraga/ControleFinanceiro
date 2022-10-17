import styled from "styled-components"

export const Container = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000099;

  div{
    max-width: 350px;
    margin: 15px;
    padding: 12px 8px;
    border-radius: 4px;
    background-color: ${({theme})=> theme.bg};
    border: 2px solid #707070;
    color: #fefef1;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h3{
      align-self: flex-start;
      color: rgb(255, 10, 10);
    }
    p{
      font-size: 14px;
    }
  }

  button{
    align-self: flex-end;
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
  }
`