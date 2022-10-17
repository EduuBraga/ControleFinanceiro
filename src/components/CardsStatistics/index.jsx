import React, { useContext } from "react"
import { EntriesContext } from "../../provider/EntriesProvider"

import entrieLight from '../../assets/icons/entrie-light.png'
import outputLight from '../../assets/icons/output-light.png'
import dollarLight from '../../assets/icons/dollar-light.png'

import { Container, CardsStatistic } from "./style"

export function CardsStatistics() {
  const { totalEntries, positiveEntries, negativeEntries } = useContext(EntriesContext)

  return (
    <Container>
      <CardsStatistic>
        <div>
          Entradas
          <img src={entrieLight} alt="ícone do dollar" />
        </div>
        <article>R$ {positiveEntries}</article>
      </CardsStatistic>

      <CardsStatistic>
        <div>
          Saídas
          <img src={outputLight} alt="ícone do dollar" />
        </div>
        <article>R$ {negativeEntries}</article>
      </CardsStatistic>

      <CardsStatistic>
        <div>
          Total
          <img src={dollarLight} alt="ícone do dollar" />
        </div>
        <article>R$ {totalEntries}</article>
      </CardsStatistic>
    </Container>
  )
}