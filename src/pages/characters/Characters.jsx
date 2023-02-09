import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCharacters } from '../../services/characters'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  useEffect(() => {
    getCharacters({ page: prevPage || nextPage })
      .then(data => {
        setCharacters(data.results)
        setPages(data.info?.pages)
        setPrevPage(data.info?.prev)
        setNextPage(data.info?.next)
      }).catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>
        Characters
      </h1>
      <h1 className='text-dark'>
        Hello world
      </h1>
      <p>Pages: {pages}</p>
      {
        characters.map(character => {
          return (
            <li key={character.id}>{character.name}</li>
          )
        })
      }
      <Link to={prevPage} className='bg-red-400'>
        Previous
      </Link>
      <Link to={nextPage}>
        Next
      </Link>
    </div>
  )
}

export default Characters
