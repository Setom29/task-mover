import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

const Login = inject("usersTable")(observer((props) => {
  // props.users.....
  const changeCurrentUser = function(e) {
    props.usersTable.changeCurrentItemId(Number(e.target.value))
  }

  return (
    <div>
      <h1>Login</h1>
      <Link to="/workspace"><p>{JSON.stringify(props.usersTable.currentItem)}</p></Link>
      <input type="number" id="currentUserIdInput" onChange={changeCurrentUser} value={props.usersTable.currentId}></input>
    </div>
  )
}))

export default Login;