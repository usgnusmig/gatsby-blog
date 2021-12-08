import * as React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <>
      <h1>Hello Im Sungsu</h1>
      <Link to="/">Go back</Link>
      <h4>Study..</h4>
      <Link to="/Counter">Counter</Link>
      <br />
      <Link to="/financialLedger">Financial Ledger</Link>
      <br />
    </>
  )
}

export default About
