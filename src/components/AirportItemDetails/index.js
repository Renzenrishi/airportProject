import './index.css'

import {Text, Button, FileTrigger, Switch} from '@adobe/react-spectrum'

const AirportItemDetails = props => {
  const {details} = props

  const {name} = details

  return (
    <main className="bg-container">
      <p>{`Airports > ${name}`}</p>
      <h1>{name}</h1>
      <ul className="tab-container">
        <li className="tab">Terminals</li>
        <li className="tab">Transport</li>
        <li className="tab">Contact details</li>
      </ul>
      <hr />
      <div className="card-container">
        <img
          src="https://res.cloudinary.com/dk2u56c3v/image/upload/v1720148480/Card_-_Desktop_-_Light_cizf4x.jpg"
          alt="card "
        />
        <img
          src="https://res.cloudinary.com/dk2u56c3v/image/upload/v1720148527/Card_-_Desktop_-_Light_2_uoytuo.png"
          alt="card "
        />

        <Button variant="primary" UNSAFE_className="add-btn">
          <Text>+ Add Terminal</Text>
        </Button>
      </div>
      <div className="services-section">
        <h2>Services</h2>
        <p>Lost & Found</p>
        <hr />
        <form className="form-container">
          <div>
            <label htmlFor="a">Service Name</label>
            <br />
            <input type="text" value="Lost & Found" id="a" />
          </div>
          <label htmlFor="select-1">Category</label>
          <br />
          <select id="select-1">
            <option value="option">Option 1</option>
            <option value="option">Option 2</option>
            <option value="option">Option 3</option>
          </select>
          <div>
            <label htmlFor="select-2">Sub Category</label>
            <br />
            <select id="select-2">
              <option value="option">Option 1</option>
              <option value="option">Option 2</option>
              <option value="option">Option 3</option>
            </select>
          </div>
          <FileTrigger acceptedFileTypes={['image/png']}>
            <Button variant="primary">+ Upload</Button>
          </FileTrigger>
          <Switch aria-label="Show image" />
          <div>
            <label htmlFor="desc">Description</label>
            <br />
            <input type="text" id="desc" placeholder="type here" />
          </div>
          <Button
            variant="primary"
            UNSAFE_style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '7px',
              borderRadius: '25px',
              width: '75px',
            }}
          >
            Save
          </Button>
        </form>
        <p>Lounge</p>
        <hr />
        <p>Money exchange</p>
        <hr />
      </div>
    </main>
  )
}

export default AirportItemDetails
