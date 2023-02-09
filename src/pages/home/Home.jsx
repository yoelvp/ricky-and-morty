import { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../layout/Layout'
import Card from './components/Card'

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    await axios.get('https://rickandmortyapi.com/api/character')
      .then(response => response.data)
      .then(data => {
        setPages(data.info.pages)
        setCharacters(data.results)
      })
      .catch(error => console.error(error))
  }

  return (
    <Layout>
      <h1 className='text-2xl'>
        Homepage {pages}
      </h1>
      <section className='grid grid-cols-2 gap-4'>
        {characters.map(character => <Card key={character.id} character={character} />)}
      </section>
    </Layout>
  )
}

export default Home
