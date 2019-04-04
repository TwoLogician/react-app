import * as React from "react"
import { Link, Route } from "react-router-dom"

import { OneOne, OneTwo } from "./Ones"

class One extends React.Component {
    public render() {
        return (
            <div>
                <h1>One</h1>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/one/one/">OneOne</Link>
                            </li>
                            <li>
                                <Link to="/one/two/">OneTwo</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/one/one/" component={OneOne} />
                    <Route path="/one/two/" component={OneTwo} />
                </div>
            </div>
        )
    }
}

export default One
