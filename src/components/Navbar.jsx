import React from 'react'
import { NavLink } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
    <nav>
        <ul className="navbar__list">
            <li>
                <NavLink to={"/create_post"}>Create post</NavLink>
            </li>
            <li>
                <NavLink to={"/posts"}>Watch posts</NavLink>
            </li>
            <li>
                <NavLink to={"/"}>Go back</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar