import React, { useState } from "react"

import { EntriesCard } from "../entriesCard"
import { CardsStatistics } from "../CardsStatistics"
import { ModalError } from "../ModalError"
import { Form } from "../Form"

import { ContainerMain, ContainerHeader, ContainerEntries, HeaderEntries } from "./style"

export function Home() {
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

          <EntriesCard />
        </ContainerEntries>
      </ContainerMain>
    </>
  )
}