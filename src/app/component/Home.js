import React, { Component } from "react"
import {Link} from "react-router-dom"

export default class Home extends React.Component {
  render(){
    return ( 
      <div id="home">
        <div class="jumbotron">
          <h1 class="display-4">Welcome!</h1>
          <p class="lead">This is a my website</p>
          <hr class="my-4"/>
          <p class="lead">
            <Link class="btn btn-primary btn-lg" to="/main" role="button">Click</Link>
          </p>
        </div>
      </div>
    )
  }
}