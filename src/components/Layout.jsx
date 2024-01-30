import React from 'react'
import { Outlet } from 'react-router-dom'
import "../index.css"

const Layout = () => {
  return (
    <>
        <Outlet/>
        <footer>
            <span className="layOut">20.12.2023</span>
        </footer>
    </>
  )
}

export default Layout