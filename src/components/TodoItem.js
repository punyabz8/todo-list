import React from 'react'
import './styles/Input.css'
import uuid from 'uuid';

class TodoItem extends React.Component{
    
    render(){
        let { todo } = this.props
        return(
            
            <div key= {uuid.v4()} className = {todo.completed ? 'taskCompleted' : '' }>
                <input 
                    key = { todo.id } 
                    type='checkbox' value = { todo.id } 
                    checked = { todo.completed ? true : false }
                    onChange = {this.props.onCheckedList.bind(this, todo.id)} >
                </input>
                <p className = "todo-content">{todo.title}</p>
                <span className = "deleteBtn" onClick = { this.props.deleteItem.bind(this, todo.id) }>x</span>
            </div>
        )
    }
}

export default TodoItem;