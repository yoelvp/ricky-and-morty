import { Link } from 'react-router-dom'

const Card = ({ character }) => {
  return (
    <Link
      to={`character/${character.id}`}
      className="inline-block bg-slate-800 rounded-xl overflow-hidden border border-yellow-500"
    >
      <div className="w-full relative">
        <img
          src={character.image}
          alt=""
          loading="eager"
          className="w-full h-64 object-cover object-top"
        />
        <img
          src={character.image}
          alt=""
          className="w-24 h-24 bg-red-800 rounded-full absolute top-[13rem] overflow-hidden object-cover object-center border border-white"
        />
        <section className="mt-14 mb-8">
          <p className="text-center text-xl text-white font-bold">
            {character.name}
          </p>
          <p className="text-gray-400 text-center text-base font-normal">
            {character.location?.name}
          </p>
          <article className="flex justify-center items-center gap-4 mt-4">
            <p className="bg-cyan-600 text-white rounded-md px-2">
              {character.gender}
            </p>
            <p className="bg-cyan-600 text-white rounded-md px-2">
              {character.status}
            </p>
          </article>
        </section>
      </div>
    </Link>
  )
}

export default Card
