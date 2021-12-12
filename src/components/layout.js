import * as React from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import Sns from "./sns"
import Categories from "./categories"

const Layout = ({ location, title, children, data, onChangeCat }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  if (isRootPath) {
    return (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
          <Bio />
          <Categories data={data} onChangeCat={onChangeCat} />
          <Sns />
          <footer className="footer">
            © {new Date().getFullYear()}, All Rights Reserved.
          </footer>
        </header>
        <main>{children}</main>
      </div>
    )
  } else {
    return (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          <Link className="header-link-home" to="/">
            All Articles
          </Link>
        </header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
