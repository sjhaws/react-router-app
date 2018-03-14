import React from "react"
import {login} from "../fakeAuth"

const Login = ({history}) => (
  <div>
    <h3>Login</h3>
  <form>
    <label>Username</label>
    <br />
    <input id="username" type="text" placeholder="Username" />
    <br />
    <label>Password</label>
    <br />
    <input id="password" type="text" placeholder="Password" />
    <br />
    <button onClick={() => {
      login()
      history.push("/dashboard")
    }}>Login</button>
  </form>
  </div>
)

export default Login