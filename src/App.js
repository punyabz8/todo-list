import React from 'react'
import uuid from 'uuid'
import Header from './components/Header'
import Search from './components/Search'
import ListItem from './components/ListItem'
import AddTodoItem from './components/AddTodoItem'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      list: [
        {
          id: uuid.v4(),
          title: 'Going home safe',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'Learn Cycling',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'Reading Book 1 chapters',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Reading Novel 2 chapters',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Run 2Km',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Watch movie with friends',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Purchase chocolates for birthday',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'Invite friends for night party',
          completed: true
        }
      ],
      searchText: '',
      tabIndex: 'All'
    };
    this.dataFound = true
  }
  onClicked = (event) =>{
  }
  onCheckedList = (id) =>{
    this.setState({ list: this.state.list.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  addTodoItem = (event) =>{
    const ENTER = 13;
    const MOUSELEFT = 0;
    if(event.which === ENTER || event.button === MOUSELEFT){
      if(event.target.value !== ''){
        let todoExist = this.state.list.every((todo)=>{
          return todo.title.toLowerCase() !== (event.target.value.toLowerCase()).trim()
        });
      if(todoExist){
        const newTodo = {
          id: uuid.v4(),
          title: event.target.value.trim(),
          completed: false
        }
        this.setState({list : [...this.state.list, newTodo]});
        }
      }
    }
  }

  searchFieldChange = (searchFieldText) => {
    this.setState({ searchText : searchFieldText.toLowerCase() })
  }

  tabResponse = (e) =>{
    this.setState({ tabIndex: e.target.innerHTML.trim() })
  }

  dataNotFound = () =>{
    if(this.dataFound === false){
      return (
        <p className = 'dataNotFound'>No Data Found!!!</p>
      )
    }
  }

  deleteItem = (id) =>{
    this.setState({list: this.state.list.filter((todo) =>{
      return todo.id !== id;
    })})
  }

  render(){
    let displayList = this.state.list.filter((todo) => {
      return (todo.title.toLowerCase()).includes(this.state.searchText);      
    })
    
    if(this.state.tabIndex === "Completed"){
      displayList = displayList.filter((todo) =>{
        return (todo.completed === true)
      })
    }
    if(this.state.tabIndex === 'Remaining'){

      displayList = displayList.filter((todo) =>{
        return (todo.completed === false)
      })
    }
    this.dataFound = displayList.length === 0 ? false : true;
    return (
      <React.Fragment>
        <Header tabResponse = { this.tabResponse } activeTab = { this.state.tabIndex } />
        <div className = 'main-container'>
        <Search searchFieldChange = { this.searchFieldChange }/>
        <AddTodoItem addTodoItem = {this.addTodoItem} addTodoItemSubmitted = {this.addTodoItemSubmitted}/>
        <ListItem todos = { displayList } onCheckedList = { this.onCheckedList } deleteItem = { this.deleteItem } />
        { this.dataNotFound() }
        </div>
      </React.Fragment>
    )
  }
}

export default App;
