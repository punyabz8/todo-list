import React from 'react'

class Search extends React.Component{
    searchBarChanged = (event) =>{
        this.props.searchFieldChange(event.target.value);
    }
    
    render(){
        return(
            <React.Fragment>
                <input 
                    className = "myInput"
                    type = "text" 
                    placeholder = "Search todo list..." 
                    onChange = { this.searchBarChanged }
                    >
                </input>
            </React.Fragment>
        )
    }
}

export default Search;