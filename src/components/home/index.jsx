import React, { useContext, useEffect, useState } from "react"
import { EntriesContext } from "../../provider/EntriesProvider"

import trashDark from '../../assets/icons/trash-dark.png'
import trashLight from '../../assets/icons/trash-light.png'
import entrie from '../../assets/icons/entrie.png'
import entriedark from '../../assets/icons/entrie-dark.png'
import entrieLight from '../../assets/icons/entrie-light.png'
import output from '../../assets/icons/output.png'
import outputDark from '../../assets/icons/output-dark.png'
import outputLight from '../../assets/icons/output-light.png'
import { EntriesCard } from "../entriesCard"
import { CardsStatistics } from "../CardsStatistics"

import { ContainerMain, ContainerHeader, ContainerForm, ContainerEntries, HeaderEntries } from "./style"

export function Home() {
  const { AddEntrie, IdFromEntrie } = useContext(EntriesContext)

  const [entrieType, setEntrieType] = useState(null)
  const [entrieDescription, setEntrieDescription] = useState("")
  const [entrieValue, setEntrieValue] = useState(0)

  const inputsRadios = document.querySelectorAll("input[name='entrieType']")

  useEffect(() => {
    const inputChecked = document.querySelector("input[name='entrieType']:checked").value
    inputChecked === "entrada" ? setEntrieType(true) : setEntrieType(false)
  }, [inputsRadios])

  return (
    <>
      <ContainerHeader>
        <h1>Controle de Finanças</h1>
      </ContainerHeader>

      <ContainerMain>
        <CardsStatistics />
        <ContainerForm onSubmit={(e) => { e.preventDefault() }}>
          <div>
            <label>Descrição</label>
            <input type="text" name="description" onChange={(e) => { setEntrieDescription(e.target.value) }} value={entrieDescription} />
          </div>
          <div>
            <label>Valor</label>
            <input type="number" name="value" onChange={(e) => { setEntrieValue(e.target.value) }} value={entrieValue} />
          </div>
          <div>
            <input onClick={() => { setEntrieType(true) }} type="radio" name="entrieType" value="entrada" defaultChecked />
            <label htmlFor="">Entrada</label>
            <input onClick={() => { setEntrieType(false) }} type="radio" name="entrieType" value="saida" />
            <label htmlFor="">Saída</label>
          </div>
          <button onClick={() => {
            AddEntrie(entrieDescription, entrieValue, entrieType)
            IdFromEntrie()
          }}>Enviar</button>
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
          <EntriesCard></EntriesCard>
        </ContainerEntries>
      </ContainerMain>
    </>
  )
}