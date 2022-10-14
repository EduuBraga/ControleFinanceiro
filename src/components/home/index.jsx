import React, { useContext, useState } from "react"
import { EntriesContext } from "../../provider/EntriesProvider"

import trashDark from '../../assets/icons/trash-dark.png'
import trashLight from '../../assets/icons/trash-light.png'
import entrie from '../../assets/icons/entrie.png'
import entriedark from '../../assets/icons/entrie-dark.png'
import entrieLight from '../../assets/icons/entrie-light.png'
import output from '../../assets/icons/output.png'
import outputDark from '../../assets/icons/output-dark.png'
import outputLight from '../../assets/icons/output-light.png'


import { ContainerMain, ContainerHeader, ContainerCardsControls, ContainerForm, ContainerEntries, ItemEntrie, WrapperTrash, HeaderEntries, CardEntrie } from "./style"

export function Home() {
  const { entries, AddEntrie, IdFromEntrie, totalEntries } = useContext(EntriesContext)

  const [entrieType, setEntrieType] = useState(null)
  const [entrieDescription, setEntrieDescription] = useState("")
  const [entrieValue, setEntrieValue] = useState(0)

  return (
    <>
      <ContainerHeader>
        <h1>Controle de Finanças</h1>
      </ContainerHeader>

      <ContainerMain>
        <ContainerCardsControls>
          <div>Entradas</div>
          <div>Saídas</div>
          <div>TOTAL R$ {totalEntries}</div>
        </ContainerCardsControls>

        <ContainerForm onSubmit={(e) => { e.preventDefault() }}>
          <div>
            <label>Descrição</label>
            <input type="text" name="description" onChange={(e) => { setEntrieDescription(e.target.value) }} value={entrieDescription}></input>
          </div>
          <div>
            <label>Valor</label>
            <input type="number" name="value" onChange={(e) => { setEntrieValue(e.target.value) }} value={entrieValue}></input>
          </div>
          <div>
            <input onClick={() => { setEntrieType(true) }} type="radio" name="entrieType" value="entrada" />
            <label htmlFor="">Entrada</label>
            <input onClick={() => { setEntrieType(false) }} type="radio" name="entrieType" value="saida" />
            <label htmlFor="">Saída</label>
          </div>
          <button onClick={() => {
            AddEntrie(entrieDescription, entrieValue, entrieType)
            IdFromEntrie()
          }}>
            Enviar
          </button>
        </ContainerForm>

        <ContainerEntries>
          <HeaderEntries>
            <div>
              <strong>Descrição</strong>
              <strong>Valor</strong>
              <strong>Tipo</strong>
            </div>
            <span></span>
          </HeaderEntries>
          {entries.map((item) =>
            <CardEntrie>
              <ItemEntrie key={item.id}>
                <p>{item.description}</p>
                <p>{item.value}</p>
                {item.entrieType ? (<img src={entrie} alt="Ícone de entrada" />) : (<img src={output} alt="Ícone de saída" />)}
              </ItemEntrie>
              <WrapperTrash>
                <img src={trashLight} alt="Ícone de lixeira" />
              </WrapperTrash>
            </CardEntrie>
          )}
        </ContainerEntries>
      </ContainerMain>
    </>
  )
}