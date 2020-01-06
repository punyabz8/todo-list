import React from 'react'
import './styles/Input.css'

class AddTodoItem extends React.Component{
    render(){
        return(
            <>
                <input className = "myInput" type="text" placeholder = "Add Todo item..." title = "Press enter to add." onKeyDown = {(e) => {this.props.addTodoItem(e); if(e.which === 13){e.target.value = ''}}} >
                </input>
            </>
        )
    }
}

export default AddTodoItem;