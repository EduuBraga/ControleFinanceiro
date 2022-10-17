import React, { createContext, useEffect, useState } from "react"

export const EntriesContext = createContext()

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([])
  const [idEntrie, setIdEntrie] = useState(0)

  const [totalEntries, setTotalEntries] = useState(0)
  const [positiveEntries, setPositiveEntries] = useState(0)
  const [negativeEntries, setNegativeEntries] = useState(0)

  function TransformInt(n) {
    return parseInt(n)
  }

  function IdFromEntrie() {
    setIdEntrie(prev => prev + 1)
  }

  function AddEntrie(desc, value, entrieType) {
    const entrie = {
      description: desc,
      value: TransformInt(value),
      entrieType: entrieType,
      id: idEntrie
    }
    setEntries([...entries, entrie])
  }

  function removeEntrie(id) {
    let arrayFiltered = entries.filter((entrie) => entrie.id != id)
    setEntries(arrayFiltered)
  }

  useEffect(() => {
    //Pegando itens salvos na memória
    let entriesSalved = JSON.parse(localStorage.getItem('entries'))
    if (entriesSalved) {
      setEntries(entriesSalved)
    }
  }, [])

  useEffect(() => {
    const AllEntriesPositive = entries.filter((i) => { return i.entrieType === true })
    const AllEntriesNegative = entries.filter((i) => { return i.entrieType === false })

    const totalValuePositive = AllEntriesPositive.reduce((total, entrie) => { return total + entrie.value }, 0)
    const totalValueNegative = AllEntriesNegative.reduce((total, entrie) => { return total + entrie.value }, 0)

    setPositiveEntries(totalValuePositive)
    setNegativeEntries(totalValueNegative)
    setTotalEntries(totalValuePositive - totalValueNegative)

    //Pegando o maior id dentro das entries caso tenha alguma entrie na memória, para assim não haver dois ids iguais.
    if(entries.length >= 1){
      let ids = entries.map(item => { return item.id })
      let largerNumber = Math.max.apply(null, ids)
      setIdEntrie(largerNumber + 1)
    }
    
    //Salvando itens na memória
    console.log(entries);
    localStorage.setItem('entries', JSON.stringify(entries))
  }, [entries])

  return (
    <EntriesContext.Provider value={{
      entries,
      setEntries,
      AddEntrie,
      IdFromEntrie,
      totalEntries,
      positiveEntries,
      negativeEntries,
      removeEntrie
    }}>
      {children}
    </EntriesContext.Provider>
  )
}