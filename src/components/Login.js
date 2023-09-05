import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

const Login = inject("users")(observer((props) => {
  // props.users.....
  const changeCurrentUser = function(e) {
    props.users.changeCurrentItemId(Number(e.target.value))
  }

  return (
    <div>
      <h1>Login</h1>
      <Link to="/workspace"><p>{JSON.stringify(props.users.currentItem)}</p></Link>
      <input type="number" id="currentUserIdInput" onChange={changeCurrentUser} value={props.users.currentId}></input>
    </div>
  )
}))

export default Login;