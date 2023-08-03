import { Component } from "react";
type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}
export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    }
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>
                <button style={{ color: "white", background: 'blue', height: '3vh', marginBottom: '20px' }} onClick={this.handleClick}>Increment</button>
                <br />
                {this.props.message} {this.state.count}
            </div>
        )
    }

}