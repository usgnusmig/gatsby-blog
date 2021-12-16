import React, { useState } from "react"

import AddUser from "../components/userInput/Users/AddUser"
import UserList from "../components/userInput/Users/UserList"

const UserInput = () => {
  const [userList, setUserList] = useState([])

  const AddUserHandler = (uName, uAge) => {
    setUserList(prevList => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={userList} />
    </div>
  )
}

export default UserInput
