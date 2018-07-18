import * as axios from "axios"
import * as React from "react"
import * as NumberFormat from "react-number-format"

import "./App.css"
import logo from "./logo.svg"


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  fileChange = e => {
    let data = new FormData()
    data.append("files", e.target.files[0])
    data.append("json", JSON.stringify({ roomId: 1, userId: 1 }))
    axios.default.post("http://localhost:5001/api/folders/import", data).then(rs => {
      console.log(rs)
      let url = `http://localhost:5001/api/files?fileName=${rs.data}`
      let link = document.createElement("a")
      link.href = url
      link.click()
      window.URL.revokeObjectURL(url);
    }).catch(err => {
      console.log(err)
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
        <NumberFormat thousandSeparator={true} prefix={'$'} />
        <div>
          <input onChange={this.fileChange} type="file" />
        </div>
      </div>
    )
  }
}

export default App
