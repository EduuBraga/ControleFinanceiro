import React from "react"

import { Container } from "./style"

export function ModalError({ setVisibleModal }) {
  const inputDescription = document.querySelector('input[name="description"]')
  const inputValue = document.querySelector('input[name="value"]')

  function handleClick(){
    if(inputDescription.value !== ''){
      inputValue.focus()
    }else{
      inputDescription.focus()
    }
    setVisibleModal(false)
  }
  return (
    <Container>
      <div>
        <h3>Error:</h3>
        <p>Não se pode enviar entradas vazias, preencha os campos corretamente.</p>
        <button onClick={handleClick}>Fechar Modal</button>
      </div>
    </Container>
  )
}