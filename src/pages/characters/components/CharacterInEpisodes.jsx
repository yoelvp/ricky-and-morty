import { useState, useEffect } from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'
import { BiMoviePlay } from 'react-icons/bi'
import { MdOutlineSubtitles } from 'react-icons/md'
import axios from 'axios'

const CharacterInEpisodes = ({ episodeList }) => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getAllEpisodes()
  }, [episodeList])

  const getAllEpisodes = async () => {
    try {
      const response = await axios.all(
        episodeList.map(episode => axios.get(episode))
      )
      const data = response.map(response => response.data)
      setEpisodes(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 max-h-[70vh] overflow-y-scroll pt-16">
      {episodes.map(episode => (
        <article
          key={episode.id}
          className="w-full bg-slate-700 bg-opacity-50 rounded-lg p-2 space-y-2"
        >
          <p className="flex justify-start items-center gap-2 text-white">
            <BiMoviePlay size={18} />
            <span className="font-bold">
              {episode.name}
            </span>
          </p>
          <div className="flex flex-wrap justify-start items-center gap-4">
            <p className="flex justify-start items-center gap-2 text-white bg-teal-600 py-1 px-2 rounded-md">
              <GiCommercialAirplane size={18} />
              <span>
                {episode.air_date}
              </span>
            </p>
            <p className="flex justify-start items-center gap-2 text-white bg-pink-700 py-1 px-2 rounded-md">
              <MdOutlineSubtitles size={18} />
              <span className="">
                {episode.episode}
              </span>
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default CharacterInEpisodes
