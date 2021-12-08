import React, { useState } from "react"
import { Link } from "gatsby"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const clickUpHandler = () => {
    setCounter(current => current + 1)
  }

  const clickDownHandler = () => {
    setCounter(current => current - 1)
  }

  return (
    <>
      <Link to="/about">뒤로가기</Link>
      <h3>Total Count: {counter} </h3>
      <button onClick={clickUpHandler}>Count Up</button>
      <button onClick={clickDownHandler}>Count Down</button>
    </>
  )
}

export default Counter
