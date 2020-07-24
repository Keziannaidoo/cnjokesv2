import React, { Component } from 'react';
import './App.css';
import { Dropdown } from 'semantic-ui-react'


class App extends Component {
  
  state = {
    categories: []
  }
  
  
  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let categoriesFromApi = data.map(categories => {
        return {key: categories, text: categories}
      });
      this.setState({
        categories: categoriesFromApi
      });
    }).catch(error => {
      console.log(error);
    });
  }
  
  
  render(){
  return (
    <div className="App"> 

      <header className="App-header">
      <h1>Chuck Norris Joke Generator</h1>
      
      
      <select>
        {this.state.categories.map((categories) => <option key={categories.value} value={categories.key}>{categories.text}</option>)}
      </select>
      </header>
      
    </div>
  );
}
}

export default App;



import React, { Component } from 'react';
import './App.css';
import { Dropdown } from 'semantic-ui-react'


class App extends Component {
  
  render(){

  return (
    <div className="App"> 

      <header className="App-header">
      <h1>Chuck Norris Joke Generator</h1>
      </header>
      
    </div>
    );
  }
}

export default App;



import React from 'react';
import './App.css';
import { Dropdown } from 'semantic-ui-react'

class myComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  
  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/5';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        })
      });
  //.then((data) => console.log('This is your data', data));

  }
  render() {

    var{ isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading ...</div>
    }
    else{
      return (
        <div className="App"> 
            <header className="App-header">
            <h1>Chuck Norris Joke Generator</h1>
            </header>
            <ul>
            {items.map(item =>( 
              <li key={item.id}>
               Value: {item.name} | URL: {item.url}
              </li>
            ))};
            </ul>
        </div>
        );
      
    }
  
  }
}

export default myComponent; 



