import './index.css'
import Header from '../Header'

import Sidebar from '../Sidebar'

import AirportItemDetails from '../AirportItemDetails'

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

const AirportDetails = props => {
  const {match} = props

  const {params} = match

  const {id} = params

  const presentAirport = airportsData.filter(each => each.id === id)

  return (
    <>
      <Header />
      <AirportItemDetails details={presentAirport[0]} />
      <Sidebar />
    </>
  )
}

export default AirportDetails
