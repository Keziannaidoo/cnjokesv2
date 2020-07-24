import React from "react";
import './App.css';

import 'react-dropdown/style.css';
import { Dropdown } from 'semantic-ui-react'

const categoryOptions = [
  { key: '1', value: 1, text: 'animal' },
  { key: '2', value: 2, text: 'career' },
  { key: '3', value: 3, text: 'celebrity' },
  { key: '4', value: 4, text: 'dev' },
  { key: '5', value: 5, text: 'explicit' },
  { key: '6', value: 6, text: 'fashion' },
  { key: '7', value: 7, text: 'food' },
  { key: '8', value: 8, text: 'history' },
  { key: '9', value: 9, text: 'money' },
  { key: '10', value: 10, text: 'movie' },
  { key: '11', value: 11, text: 'music' },
  { key: '12', value: 12, text: 'political' },
  { key: '13', value: 13, text: 'religion' },
  { key: '14', value: 14, text: 'science' },
  { key: '15', value: 15, text: 'sport' },
  { key: '16', value: 16, text: 'travel' },
]

export default class App extends React.Component {

  state = {
    isLoaded: false,
    categories: 1,
    isActive: false,
  };
  

  async componentDidMount(catog) {
    const cat = catog;
    let url1 = "https://api.chucknorris.io/jokes/random?category="; 
    const url = url1 + cat; 
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ 
      categories: data, 
      isLoaded: true 
    });
  }

  sayHello(){

  }; 
  

  render() {
  
    if (this.state.loading) {
      return <div>Loading Please Wait!</div>;
    }

    if (!this.state.categories) {
      return <div>Can not find a categories</div>;
    }

    return (
      <div className="App"> 
        <header className="App-header">
        <h1>Chuck Norris Joke Generator</h1>

        <div>{this.state.categories.categories}</div>
        <div>{this.state.categories.value}</div>

        <Dropdown
          placeholder='Select Categories'
          fluid
          search
          selection
          options={categoryOptions}
        />

        <button id='red' onClick={this.sayHello}>travel</button>
        </header>
      </div>



    );
  }
}

