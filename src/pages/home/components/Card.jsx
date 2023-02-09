import { Link } from 'react-router-dom'

const Card = ({ character }) => {
  return (
    <Link
      to='char/details'
      className='inline-block'
    >
      <div className='w-full rounded-xl overflow-hidden'>
        <img loading='eager' src={character.image} alt="" />
        <p>
          {character.name}
        </p>
      </div>
    </Link>
  )
}

export default Card
