import React, {useRef} from "react";

export class ClassComponent extends React.Component{
    constructor(props) {
        super(props);

        this.inputValue = React.createRef();
    }

    onClick = () => {
        this.props.alertMethod(this.inputValue.current.value)
    }

    render() {
        return (
            <>
                <h1>Class Component</h1>
                <input ref={this.inputValue}/>
                <button onClick={this.onClick}>
                    button
                </button>
                <h5>{this.props.content}</h5>
            </>
        )
    }
}