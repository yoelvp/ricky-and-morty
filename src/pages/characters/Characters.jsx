import { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../layout/Layout'
import Card from './components/Card'
import Pagination from './components/Pagination'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [pageCounter, setPageCounter] = useState(1)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getCharacters()
  }, [pageNumber])

  const getCharacters = async () => {
    await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
      .then(response => response.data)
      .then(data => {
        setPageCounter(data.info?.pages)
        setCharacters(data.results)
      })
      .catch(error => console.error(error))
  }

  return (
    <Layout>
      <h1 className='text-3xl font-bold text-yellow-500 mb-4 text-center underline underline-offset-4'>
        Personajes de la serie Ricky And Morty
      </h1>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
        {characters.map(character => <Card key={character.id} character={character} />)}
      </section>
      <Pagination
        pageCounter={pageCounter}
        setPageNumber={setPageNumber}
      />
    </Layout>
  )
}

export default Characters
