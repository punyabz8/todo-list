import React from 'react'
import './styles/Button.css'

class Button extends React.Component{
    render(){
        let {type, name} = this.props;
        return (
            <button type={type} className = {'btn ' + type } onClick={this.props.onClicked}> { name } </button>
        )
    }
}
export default Button