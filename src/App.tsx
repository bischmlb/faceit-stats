import React, { useMemo } from 'react'
import './App.scss'
import { getPlayerDetails } from './api/player';



const App: React.FC = () => {

  const test = useMemo(() => getPlayerDetails('bischh').then((e) => (e)), [])

  console.log(test)
  return (
    <></>

  )
}

export default App
