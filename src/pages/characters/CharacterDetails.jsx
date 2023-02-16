import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'
import Layout from '../../layout/Layout'
import CharacterInEpisodes from './components/CharacterInEpisodes'

import { BiPlanet } from 'react-icons/bi'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { GiLifeBar } from 'react-icons/gi'
import { FaDna } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

const CharacterDetails = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getCharacter()
  }, [])

  const getCharacter = async () => {
    await axios.get(`/character/${id}`)
      .then(response => response.data)
      .then(data => setCharacter(data))
      .catch(error => console.log(error))
  }

  return (
    <Layout>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="p-4 rounded-lg bg-slate-400 bg-opacity-50 backdrop-filter-[4px] max-h-[30vh]">
          <article className="flex justify-start items-center gap-4">
            <img
              src={character.image}
              alt={`image of ${character.name}`}
              className="rounded-full w-48 h-42 object-cover object-center"
            />
            <div className="flex flex-col justify-center items-start gap-2">
              <h2 className="text-3xl font-bold">
                {character.name}
              </h2>
              <div className="flex flex-wrap gap-4">
                <p className="px-2 py-1 rounded-lg bg-orange-400 text-white flex justify-center items-center gap-2">
                  <GiLifeBar size={18} />
                  <span>
                    {character.status}
                  </span>
                </p>
                <p className="px-2 py-1 rounded-lg bg-teal-600 text-white flex justify-center items-center gap-2">
                  <FaDna size={18} />
                  <span>
                    {character.species}
                  </span>
                </p>
                <p className="px-2 py-1 rounded-lg bg-indigo-700 text-white flex justify-center items-center gap-2">
                  <BsGenderAmbiguous size={18} />
                  <span>
                    {character.gender}
                  </span>
                </p>
                <p className="px-2 py-1 rounded-lg bg-yellow-700 text-white flex justify-center items-center gap-2">
                  <BiPlanet size={18} />
                  <span>
                    {character.origin?.name}
                  </span>
                </p>
                <p className="px-2 py-1 rounded-lg bg-cyan-700 text-white flex justify-center items-center gap-2">
                  <GoLocation size={18} />
                  <span>
                    {character.location?.name}
                  </span>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="p-4 rounded-lg bg-cyan-900 bg-opacity-50 backdrop-filter-[4px]">
          <h1 className="text-white font-bold text-3xl mb-4">
            Lista de episodios
          </h1>
          <CharacterInEpisodes episodeList={character.episode} />
        </div>
      </section>
    </Layout>
  )
}

export default CharacterDetails
