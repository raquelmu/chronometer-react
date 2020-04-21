import React from 'react'

class Button extends React.Component{
    render() {
        return (
            <button onClick={this.props.click}>
                {this.props.children}
            </button>
        )
    }
}


export default Button