
import React, { useState, useEffect } from "react"
export const UserContext = React.createContext()
export const UserProvider = (props) => {

  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [filteredUsers, setFilteredUsers] = useState([])


  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then(res => res.json())
      .then(setUsers)
  }

  const addUser = user => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then((res) => {
        const createdUser = res
        getUsers()
        return createdUser
      })
  }

  const deleteUser = userId => {
    return fetch(`http://localhost:8088/users/${userId}`, {
      method: "DELETE"
    })
      .then(getUsers)
  }

  const updateUser = user => {
    return fetch(`http://localhost:8088/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(getUsers)
  }
  //checks the user input to make sure email exists in the database 
  const existingUserCheck = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`)
      .then(_ => _.json())
      .then(user => {
        if (user.length) {
          return user[0]
        }
        return false
      })
  }

  const handleLogin = (values) => {
    existingUserCheck(values.email)
      .then(exists => {
        if (exists && exists.password === values.password) {
          localStorage.setItem("user", exists.id)
         // props.toggle()
        }  else if (!exists) {
          window.alert("User account does not exist")
        }
      })
  }
  const handleRegister = (values) => {
    existingUserCheck(values.email)
      .then(() => {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            name: values.name
          })
        })
          .then(_ => _.json())
          .then(createdUser => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("takeaways_user", createdUser.id)
              //props.toggle()
            }
          })
      })
  }
  useEffect(() => {
    handleLogin({email: "buckleyderekp@gmail.com", password: "123456"})
  }, [])


  return (
    <UserContext.Provider value={
      {
        users,
        addUser,
        deleteUser,
        updateUser,
        currentUser,
        setCurrentUser,
        filteredUsers,
        setFilteredUsers,
        handleLogin
      }
    }>
      {props.children}
    </UserContext.Provider>
  )
}