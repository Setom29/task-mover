import React from 'react'
import { observer, inject } from 'mobx-react'

const Login = inject("users")(observer((props) => {
  // props.users.....
  const changeCurrentUser = function(e) {
    props.users.changeCurrentUser(Number(e.target.value))
  }

  return (
    <div>
      <h1>Login</h1>
      <p>{JSON.stringify(props.users.currentUser)}</p>
      <input type="number" onChange={changeCurrentUser}></input>
    </div>
  )
}))

export default Login;