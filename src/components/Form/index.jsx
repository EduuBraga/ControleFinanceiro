import React, { useContext, useEffect, useState } from "react"
import { EntriesContext } from "../../provider/EntriesProvider"

import { Container, InputRadio } from "./styles"

export function Form({ setVisibleModal, SetMsgError }) {
  const { AddEntrie, IdFromEntrie } = useContext(EntriesContext)

  const [entrieType, setEntrieType] = useState(null)
  const [entrieDescription, setEntrieDescription] = useState("")
  const [entrieValue, setEntrieValue] = useState("")

  const inputsRadios = document.querySelectorAll("input[name='entrieType']")

  useEffect(() => {
    const inputChecked = document.querySelector("input[name='entrieType']:checked").value
    inputChecked === "entrada" ? setEntrieType(true) : setEntrieType(false)
  }, [inputsRadios])

  function handleSubmit(e) {
    e.preventDefault()
    if (entrieDescription !== '' && entrieValue !== '') {
      if (entrieValue <= 0) {
        SetMsgError('sua entrada não pode ser negativa')
        setVisibleModal(true)
        setEntrieValue('')
      } else {
        setEntrieDescription('')
        setEntrieValue('')
        AddEntrie(entrieDescription, entrieValue, entrieType)
        IdFromEntrie()
      }
    } else {
      setVisibleModal(true)
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <label>Descrição</label>
        <input placeholder="Ex: Alimentação" tabIndex="1" type="text" name="description" onChange={(e) => { setEntrieDescription(e.target.value) }} value={entrieDescription} />
      </div>
      <div>
        <label>Valor</label>
        <input placeholder="Ex: 1200" tabIndex="2" type="number" name="value" onChange={(e) => { setEntrieValue(e.target.value) }} value={entrieValue} />
      </div>
      <div>
        <InputRadio onClick={() => { setEntrieType(true) }} type="radio" name="entrieType" value="entrada" tabIndex="3" defaultChecked />
        <label>Entrada</label>
        <InputRadio onClick={() => { setEntrieType(false) }} type="radio" name="entrieType" value="saida" tabIndex="4" />
        <label>Saída</label>
      </div>
      <button tabIndex="5">Enviar</button>
    </Container>
  )
}