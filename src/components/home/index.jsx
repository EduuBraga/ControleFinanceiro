import React, { useContext, useEffect, useState } from "react"
import { EntriesContext } from "../../provider/EntriesProvider"

import trashLight from '../../assets/icons/trash-light.png'
import entrie from '../../assets/icons/entrie.png'
import entrieLight from '../../assets/icons/entrie-light.png'
import output from '../../assets/icons/output.png'
import outputLight from '../../assets/icons/output-light.png'
import { EntriesCard } from "../entriesCard"
import { CardsStatistics } from "../CardsStatistics"

import { ContainerMain, ContainerHeader, ContainerForm, ContainerEntries, HeaderEntries, InputRadio } from "./style"
import { ModalError } from "../ModalError"

export function Home() {
  const { AddEntrie, IdFromEntrie } = useContext(EntriesContext)

  const [entrieType, setEntrieType] = useState(null)
  const [entrieDescription, setEntrieDescription] = useState("")
  const [entrieValue, setEntrieValue] = useState(0)
  const [visibleModal, setVisibleModal] = useState(false)

  const inputsRadios = document.querySelectorAll("input[name='entrieType']")

  useEffect(() => {
    const inputChecked = document.querySelector("input[name='entrieType']:checked").value
    inputChecked === "entrada" ? setEntrieType(true) : setEntrieType(false)
  }, [inputsRadios])

  function handleSubmit(e) {
    e.preventDefault()
    if (entrieDescription !== '' && entrieValue !== 0) {
      setEntrieDescription('')
      setEntrieValue(0)
      AddEntrie(entrieDescription, entrieValue, entrieType)
      IdFromEntrie()
    }else{
      setVisibleModal(true)
    }
  }

  return (
    <>
      {visibleModal && <ModalError setVisibleModal={setVisibleModal}/>}
      <ContainerHeader>
        <h1>Controle de Finanças</h1>
      </ContainerHeader>

      <ContainerMain>
        <CardsStatistics />
        <ContainerForm onSubmit={handleSubmit}>
          <div>
            <label>Descrição</label>
            <input tabIndex="1" type="text" name="description" onChange={(e) => { setEntrieDescription(e.target.value) }} value={entrieDescription} />
          </div>
          <div>
            <label>Valor</label>
            <input tabIndex="2" type="number" name="value" onChange={(e) => { setEntrieValue(e.target.value) }} value={entrieValue} />
          </div>
          <div>
            <InputRadio onClick={() => { setEntrieType(true) }} type="radio" name="entrieType" value="entrada" tabIndex="3" defaultChecked />
            <label>Entrada</label>
            <InputRadio onClick={() => { setEntrieType(false) }} type="radio" name="entrieType" value="saida" tabIndex="4" />
            <label>Saída</label>
          </div>
          <button tabIndex="5">Enviar</button>
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

          <EntriesCard />
        </ContainerEntries>
      </ContainerMain>
    </>
  )
}