import React, { Component } from 'react';

class NewButton extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <button id="ClickMe" className="click-me">Click Me</button>
            </div>
        )
    }
};

export default NewButton;