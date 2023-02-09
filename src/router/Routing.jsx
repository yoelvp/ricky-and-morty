import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Characters from '../pages/characters/Characters'

import Header from '../components/Header'

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </>
  )
}

export default Routing
