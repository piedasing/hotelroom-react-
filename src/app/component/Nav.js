import React, { Component } from "react"
import { Link } from "react-router-dom"
export default class Nav extends React.Component {
  render(){
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <Link class="navbar-brand" to="/home">MYSITE</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/practice">Practice</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}