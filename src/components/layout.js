import * as React from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import { FiMail, FiGithub } from "react-icons/fi"

const Layout = ({ location, title, children }) => {
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
          <div className="icon-box">
            <a
              className="icons"
              href="https://github.com/usgnusmig"
              title="Github"
            >
              <FiGithub />
            </a>
            <a
              className="icons"
              href="mailto:usgnusmig@gmail.com"
              title="usgnusmig@gmail.com"
            >
              <FiMail />
            </a>
            <a
              className="icons"
              href="https://www.buymeacoffee.com/usgnusmig"
              title="Buy me a coffee"
            >
              <img
                src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg"
                alt="Buy me a coffee"
              />
            </a>
          </div>
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
