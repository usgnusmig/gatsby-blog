import * as React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div className="about-wrap">
      <h1>
        <Link to="/">안녕하세요</Link>
      </h1>
      <ol>
        작업 목록
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/financialLedger">Financial Ledger</Link>
        </li>
        <li>
          <Link to="/userInput">User Input Form</Link>
        </li>
      </ol>
    </div>
  )
}

export default About
