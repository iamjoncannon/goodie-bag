import React from 'react'
import AllCandy from './allcandy'
import OneCandy from './OneCandy'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to='/'> <span className="navBar">   {"Goodie Bag  "} </span>   </Link>
          <Link to='/candies'> <span className="navBar">   Candies!!!! </span> </Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route exact path='/candies' component={AllCandy} />
          <Route path='/candies/:candyId' component={OneCandy} />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Root
