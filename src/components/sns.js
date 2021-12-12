import React from "react"
import { FiMail, FiGithub } from "react-icons/fi"

const Sns = () => {
  return (
    <div className="icon-box">
      <a className="icons" href="https://github.com/usgnusmig" title="Github">
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
  )
}

export default Sns
