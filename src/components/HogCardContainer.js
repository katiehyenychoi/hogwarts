import React, { Component } from "react";
import HogCard from "./HogCard.js";


export default class HogCardContainer extends Component {





    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.props.handleGreased()}>Show Greased Hogs</button>
                    <button onClick={() => this.props.sortByName()}>Sort Hogs By Name</button>
                    <button onClick={() => this.props.sortByWeight()}>Sort Hogs By Weight</button>
                </div>
                <br></br>
                <div className="ui grid container">
                    
                    {this.props.hogs.map(hog => {
                        return(
                            <HogCard hog={hog} />
                        )})}
                </div>
            </div>
        )
    }
}

