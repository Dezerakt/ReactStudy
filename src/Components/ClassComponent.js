import React from "react";

export class ClassComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Class Component</h1>
                <h5>{this.props.content}</h5>
            </>
        )
    }
}