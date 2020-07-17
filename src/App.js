import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; 
import './App.css';


// const state = {
  
// }

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  
  }

 

render() {

  const filterRobots = this.state.robots.filter(robots => {
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
  return (
    <div className="tc">
      <h2 className="f2">Robot Friends</h2>
      <SearchBox searchchange={this.onSearchChange}/>
      <CardList robots={filterRobots}/>
    </div>
  );
}
  
}

export default App;
