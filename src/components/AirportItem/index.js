import './index.css'

import {Link} from 'react-router-dom'

const AirportItem = props => {
  const {details} = props
  const {id, name, country, terminals, code} = details

  return (
    <li className="airport-item">
      <div className="space">
        <input type="checkbox" id={id} />
        <Link
          style={{textDecoration: 'none', color: 'black'}}
          to={`airport-details/${id}`}
        >
          <label htmlFor={id}>{name}</label>
        </Link>
      </div>
      <p>{country}</p>
      <p>{code}</p>
      <p>{terminals}</p>
    </li>
  )
}

export default AirportItem
