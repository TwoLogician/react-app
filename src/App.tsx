import * as React from "react"
import { HashRouter, Link, Route } from "react-router-dom"

import "./App.css"
import { One, Two, Three } from "./Pages"

import logo from "./logo.svg"

type State = {
  name: string
}

class App extends React.Component<{}, State> {

  constructor() {
    super({})
    this.state = { name: "" }
  }

  change = e => {
    let name = Object.assign(this.state, { name: e.target.value })
    this.setState(name, () => {
      console.log(new Date())
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input onChange={this.change} value={this.state.name} />
        <div className="desktop">Desktop</div>
        <div className="mobile">Mobile</div>
        <HashRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/one/">One</Link>
                </li>
                <li>
                  <Link to="/two/">Two</Link>
                </li>
                <li>
                  <Link to="/three/">Three</Link>
                </li>
              </ul>
            </nav>
            <Route path="/one/" component={One} />
            <Route path="/two/" component={Two} />
            <Route path="/three/" component={Three} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App
