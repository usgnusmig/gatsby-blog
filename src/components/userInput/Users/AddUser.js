import React, { useState } from "react"

import { Link } from "gatsby"
import "./AddUser.css"
import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState("")
  const [enteredAge, setEnteredAge] = useState("")

  const [error, setError] = useState()

  const addUserHandler = event => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "입력 오류",
        message: "이름 또는 나이를 입력해주세요",
      })
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: "나이 오류",
        message: "나이를 확인해주세요 (0 이상 입력 필요)",
      })
      return
    }

    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername("")
    setEnteredAge("")
  }

  const nameChangeHandler = event => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div className="container">
      <Link to="/about">
        <h2>사용자 입력 폼</h2>
      </Link>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={nameChangeHandler}
          />

          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="numver"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
