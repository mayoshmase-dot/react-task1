import React from 'react'
import style from './header.module.css'
export default function Header() {
  return ( <>
<nav className={`${style.demo} navbar navbar-expand-lg p-4 position-sticky top-0 z-1`}>
  <div className="container ">
    <a className="navbar-brand text-white" href="#">Start BootStrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className='navbar-nav ms-auto d-flex gap-5  '>
        <li className="nav-item ">
          <a className="nav-link text-white " aria-current="page" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
