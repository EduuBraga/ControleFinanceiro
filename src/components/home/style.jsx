import styled, {keyframes} from "styled-components"

const AnimtionCard = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`

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
  padding-right: 10px;
  padding-left: 10px;
`

export const ContainerEntries = styled.section`
  border-radius: 4px;
  padding: 12px 8px;
  color:  ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg2}; 
  animation: ${AnimtionCard} 1s ease-out;
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

export const MessageNoItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #909090;
`