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
    const AllEntriePositive = entries.filter((i) => { return i.entrieType === true })
    const AllEntrieNegative = entries.filter((i) => { return i.entrieType === false })

    const totalValuePositive = AllEntriePositive.reduce((total, entrie) => { return total + entrie.value }, 0)
    const totalValueNegative = AllEntrieNegative.reduce((total, entrie) => { return total + entrie.value }, 0)

    setPositiveEntries(totalValuePositive)
    setNegativeEntries(totalValueNegative)
    setTotalEntries(totalValuePositive - totalValueNegative)
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