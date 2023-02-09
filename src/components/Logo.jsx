import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <Link to='/' className='flex justify-center items-center gap-2'>
      <motion.img
        src="https://rickandmortyapi.com/favicon-32x32.png?v=1538abef51e33ef514e8fe1ab9aeab4e"
        alt="ricky and morty logo"
        whileHover={{
          rotate: 15,
          scale: 1.05
        }}
      />

      <h4 className='text-lg uppercase font-medium'>
        Ricky & Morty
      </h4>
    </Link>
  )
}

export default Logo
