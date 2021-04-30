import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogCardContainer from "./HogCardContainer";

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: [...hogs]
    }
  }

  handleGreased = () => {
    let greasedHogs = this.state.hogs.filter((hog) => hog.greased === true)
    this.setState({
      hogs: greasedHogs
    })
  }

  sortByName = () => {
    let nameSortedHogs = this.state.hogs.sort((hogA, hogB) => {
        if(hogA.name < hogB.name) { return -1; }
        if(hogA.name < hogB.name) { return 1; }
        return 0;
    })
    this.setState({
      hogs: nameSortedHogs
    })
  }

  sortByWeight = () => {
    let weightSortedHogs = this.state.hogs.sort((hogA, hogB) => {
      if(hogA.weight < hogB.weight) { return -1; }
      if(hogA.weight < hogB.weight) { return 1; }
      return 0;
    })
    this.setState({
      hogs: weightSortedHogs
    })  
}
  
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <HogCardContainer hogs={this.state.hogs} handleGreased={this.handleGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
      </div>
    );
  }
}

export default App;
