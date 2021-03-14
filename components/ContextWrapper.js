import HeaderContext from '../contexts/HeaderContext'
import { useState } from 'react'

function ContextWrapper({ children, navigation }) {
  const [menuItems] = useState(navigation)

  return (
    <HeaderContext.Provider value={{ menuItems }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default ContextWrapper
