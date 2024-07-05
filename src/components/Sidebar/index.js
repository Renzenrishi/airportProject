import './index.css'

import {Link} from 'react-router-dom'

const Sidebar = () => (
  <aside className="sidebar">
    <div className="section-1">
      <div className="label-container">
        <Link style={{textDecoration: 'none'}} to="/">
          <button type="button" className="nav-btn">
            <img
              src="https://res.cloudinary.com/dk2u56c3v/image/upload/v1720107353/Icon_gw9nfg.png"
              className="icon"
              alt="icon"
            />
            <p>Home</p>
          </button>
        </Link>
      </div>
      <div className="label-container">
        <button type="button" className="nav-btn">
          <img
            src="https://res.cloudinary.com/dk2u56c3v/image/upload/v1720107379/Icon_2_nft1uf.png"
            className="icon"
            alt="icon"
          />
          <p>Dashboard</p>
        </button>
      </div>
    </div>
    <ul className="section-2">
      <p className="nav-header">Services</p>
      <li className="nav-item active">Airports</li>
      <li className="nav-item">Videos</li>
    </ul>
    <ul className="section-3">
      <p className="nav-header">Others</p>
      <li className="nav-item">List 1</li>
      <li className="nav-item">List 2</li>
      <li className="nav-item">List 3</li>
    </ul>
  </aside>
)

export default Sidebar
