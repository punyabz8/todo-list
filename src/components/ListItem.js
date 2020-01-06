import React from 'react'
import uuid from 'uuid'
import './styles/ListItem.css'
import TodoItem from './TodoItem'

class ListItem extends React.Component{
    
    render(){
        let {todos} = this.props;
        return (
            <div className = 'list-container'>
                { todos.map(( todo ) =>  <TodoItem key = { uuid.v4() } 
                todo={todo} onCheckedList = { this.props.onCheckedList }
                deleteItem = { this.props.deleteItem }/> ) }
            </div>
        )
    }
}
export default ListItem