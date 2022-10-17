import React, { useContext, useState } from "react"
import { EntriesContext } from "../../provider/EntriesProvider"

import { EntriesCard } from "../entriesCard"
import { CardsStatistics } from "../CardsStatistics"
import { ModalError } from "../ModalError"
import { Form } from "../Form"

import { ContainerMain, ContainerHeader, ContainerEntries, HeaderEntries, MessageNoItem } from "./style"

export function Home() {
  const { entries } = useContext(EntriesContext)

  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <>
      {visibleModal && <ModalError setVisibleModal={setVisibleModal} />}
      <ContainerHeader>
        <h1>Controle de Finanças</h1>
      </ContainerHeader>

      <ContainerMain>
        <CardsStatistics />
        <Form setVisibleModal={setVisibleModal} />

        <ContainerEntries>
          <HeaderEntries>
            <div>
              <strong>Descrição</strong>
              <strong>Valor</strong>
              <strong>Tipo</strong>
            </div>
            <span></span>
          </HeaderEntries>

          {entries.length >= 1 ? (<EntriesCard />) : (
            <MessageNoItem>
              <h3>Sem entradas</h3>
              <p>Nenhuma entrada foi encontrada. Preencha os campos e controle sua renda financeira!</p>
            </MessageNoItem>
          )}
          
        </ContainerEntries>
      </ContainerMain>
    </>
  )
}