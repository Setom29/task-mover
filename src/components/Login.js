import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import Users from './Users';

const Login = inject("usersTable")(observer((props) => {
  // props.users.....
  const changeCurrentUser = function(e) {
    props.usersTable.changeCurrentItemId(Number(e.target.value))
  }

  return (
    <div>
      <h1>Login</h1>
      <Users/>
    </div>
  )
}))

export default Login;