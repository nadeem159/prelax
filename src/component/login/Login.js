import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Login.css"
const Login = () => {

  return (
    <div className="container master d-flex justify-content-center">
	<div className="sign-in-container ">
		<form action="#">
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<NavLink to="/login">Forgot your password?</NavLink>
			<button>Sign In</button>
		</form>
	</div>
</div>
  )
}

export default Login