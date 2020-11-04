import React from "react"
import { Link } from "gatsby"
import logo from './logo.png'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header


  header = (
    <div>
      <h1 className="main-heading">
        <Link to="/"><img src={logo} style={{width:'100%'}} alt="simplicity kitchen logo" /></Link>
      </h1>
      {/**<ul className="nav-ul">
        <li className="nav-li"><Link to='/' >Home</Link></li>
        <li className="nav-li"><Link to='/'>Recipes</Link></li>
        <li className="nav-li"><Link to='/'>Meet Jemma</Link></li>
      </ul>**/}
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Created by Jemma McKenzie
      </footer>
    </div>
  )
}

export default Layout
