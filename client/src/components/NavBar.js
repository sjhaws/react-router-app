import React from "react"
import {Link} from "react-router-dom"

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
}

const NavBar = () => (
  <nav>
    <Link exact to="/" activeStyle={styles.active}>Home</Link>
    {" "}
    <Link exact to="/about">About</Link>
  </nav>
)

export default NavBar;