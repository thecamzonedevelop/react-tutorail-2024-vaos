import React from 'react'
import { useTestContext } from '../context/TestContext'

function AppProvider({ children }) {
    
  return (
    <useTestContext.Provider value={useTestContext()}>
      {children}
    </useTestContext.Provider>
  )
}

export default AppProvider