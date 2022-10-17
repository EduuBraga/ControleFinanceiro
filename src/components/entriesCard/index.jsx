import React, { useContext, useState } from "react"
import { EntriesContext } from "../../provider/EntriesProvider"

import trashLight from '../../assets/icons/trash-light.png'
import trashRed from '../../assets/icons/trash-red.png'
import entrie from '../../assets/icons/entrie.png'
import output from '../../assets/icons/output.png'

import { Container, CardEntrie, WrapperTrash, ItemEntrie } from "./style"

export function EntriesCard() {
  const { entries, removeEntrie } = useContext(EntriesContext)

  function handleClick(e) {
    let imgTrash = e.target
    let idItemClicked = imgTrash.parentElement.parentElement.id
    removeEntrie(idItemClicked)
  }

  return (
    <Container>
      {entries.map((item) =>
        <CardEntrie id={item.id} key={item.id}>
          <ItemEntrie >
            <p>{item.description}</p>
            <p>{item.value}</p>
            {item.entrieType ? (<img src={entrie} alt="Ícone de entrada" />) : (<img src={output} alt="Ícone de saída" />)}
          </ItemEntrie>
          <WrapperTrash >
              <img onClick={handleClick} src={trashLight} alt="Ícone de lixeira" />
              <img onClick={handleClick} src={trashRed} alt="Ícone de lixeira" />
          </WrapperTrash>
        </CardEntrie>
      )}
    </Container>
  )
}