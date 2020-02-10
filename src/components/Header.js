import React from 'react'
import Tab from './Tab'
import './styles/Header.css'

class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="header-left">
                    <h1>TODO LIST</h1>
                </div>
                <div className="header-menu">
                    <ul>
                        <Tab tabDisplay = 'All' tabClicked = { this.props.tabResponse } addClass = { this.props.activeTab === 'All' ? true : false }/>
                        <Tab tabDisplay = 'Completed' tabClicked = { this.props.tabResponse } addClass = { this.props.activeTab === 'Completed' ? true : false } />
                        <Tab tabDisplay = 'Remaining' tabClicked = { this.props.tabResponse } addClass = { this.props.activeTab === 'Remaining' ? true : false } />
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;