import * as React from "react"
import { Redirect } from "react-router"

type State = {
    redirect: boolean
}

class Two extends React.Component<{}, State> {

    redirect = false

    constructor() {
        super({})
        this.state = {
            redirect: false
        }
    }

    goToThree = () => {
        this.setState({ redirect: true })
    }

    public render() {
        return (
            this.state.redirect ?
                <Redirect push to="/three/" />
                :
                <div>
                    <h1>Two</h1>
                    <button onClick={this.goToThree}>Go to Three</button>
                </div>
        )
    }
}

export default Two
