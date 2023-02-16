import { useEffect } from 'react'

const Layout = ({ children, title = 'Ricky And Morty - Reactjs - Yoel Valverde' }) => {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <div className='container pt-4'>
      {children}
    </div>
  )
}

export default Layout
