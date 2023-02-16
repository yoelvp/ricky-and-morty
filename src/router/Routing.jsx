import { Routes, Route } from 'react-router-dom'

import Characters from '../pages/characters/Characters'
import CharacterDetails from '../pages/characters/CharacterDetails'

import Header from '../components/Header'

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/character/:id' element={<CharacterDetails />} />
      </Routes>
    </>
  )
}

export default Routing
