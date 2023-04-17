import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <header className="nav">
      <div className="cardNav">
        <div className="nav2">
          <a>
            Marcus <strong>Vinicius</strong>
          </a>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Contact</Link>
          <a href="#">Orçamento</a>
        </div>
      </div>
    </header>
  )
}

export default Nav
