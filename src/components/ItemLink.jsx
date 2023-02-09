import { Link } from 'react-router-dom'

const ItemLink = ({ to, title }) => {
  return (
    <Link to={to}>
      <span>
        {title}
      </span>
    </Link>
  )
}

export default ItemLink
