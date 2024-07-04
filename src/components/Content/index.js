import './index.css'

import {Text, Button} from '@adobe/react-spectrum'

import AirportItem from '../AirportItem'

const airportsData = [
  {
    id: '1',
    name: 'Indira Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: '3',
  },
  {
    id: '2',
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminals: '5',
  },
  {
    id: '3',
    name: 'Heath row Airport',
    country: 'England',
    code: 'LHR',
    terminals: '6',
  },
  {
    id: '4',
    name: 'Istanbul Airport',
    country: 'Turkey',
    code: 'IST',
    terminals: '3',
  },
  {
    id: '5',
    name: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DFW',
    terminals: '14',
  },
]

const style = {
  color: 'black',
  fontWeight: 'bold',
}

const MainContent = () => (
  <main className="main-content">
    <div className="airport-container">
      <h1>Airports</h1>
      <Button variant="primary" className="add-btn">
        <Text>+Add new</Text>
      </Button>
    </div>
    <div className="item">
      <div className="space">
        <input type="checkbox" id="x" />
        <label htmlFor="x" style={style}>
          All Airports{' '}
          <span>
            <img
              src="https://res.cloudinary.com/dk2u56c3v/image/upload/v1720116983/Arrow_j1ebpn.png"
              alt="arrow"
            />
          </span>
        </label>
      </div>
      <p style={style}>Country</p>
      <p style={style}>Code</p>
      <p style={style}>Terminals</p>
    </div>
    <ul className="list-container">
      {airportsData.map(each => (
        <AirportItem details={each} key={each.id} />
      ))}
    </ul>
  </main>
)

export default MainContent
