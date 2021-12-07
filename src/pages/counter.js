import React, { useState } from "react"

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
      <h3>Total Count: {counter} </h3>
      <button onClick={clickUpHandler}>Count Up</button>
      <button onClick={clickDownHandler}>Count Down</button>
    </>
  )
}

export default Counter
