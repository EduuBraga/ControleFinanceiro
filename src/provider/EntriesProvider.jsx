import React, { createContext, useEffect, useState } from "react"

export const EntriesContext = createContext()

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([])
  const [totalEntries, setTotalEntries] = useState(0)
  const [idEntrie, setIdEntrie] = useState(0)


  function TransformInt(n) {
    return parseInt(n)
  }

  function IdFromEntrie(){
    setIdEntrie(prev=> prev + 1)
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

  useEffect(() => {
    function getTotalValue(total, entrie) {
      return total + entrie.value
    }
    const TotalProducts = entries.reduce(getTotalValue, 0)
    setTotalEntries(TotalProducts)
    
    console.log(entries);

  }, [entries])

  return (
    <EntriesContext.Provider value={{ entries, setEntries, AddEntrie , IdFromEntrie, totalEntries}}>
      {children}
    </EntriesContext.Provider>
  )
}