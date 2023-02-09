import ItemLink from './ItemLink'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='container py-4 flex justify-between items-center'>
      <Logo />

      <nav className='flex justify-center items-center gap-2'>
        <ItemLink to='/' title='Home' />
        <ItemLink to='/characters' title='Characters' />
      </nav>
    </header>
  )
}

export default Header
