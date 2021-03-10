import HeaderContext from '../contexts/HeaderContext'
import { useContext } from 'react'

function toggleNavigationColorButton() {
  const { color, toggleColor } = useContext(HeaderContext)

  return <button onClick={() => toggleColor(!color)}>Toggle Nav Color</button>
}

export default toggleNavigationColorButton
