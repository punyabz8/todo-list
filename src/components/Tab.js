import React from 'react'

class Tab extends React.Component{
    render(){
        return (
            <React.Fragment>
                <li className = { this.props.addClass ? 'active' : '' } onClick = { this.props.tabClicked.bind(this) }> { this.props.tabDisplay } </li>
            </React.Fragment>
        )
    }
}

export default Tab;