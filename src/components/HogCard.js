import React, { Component } from "react";
import porkers_data from "../porkers_data.js";
import HogDetails from './HogDetails'


// let pigURL = this.props.



class HogCard extends Component {
    // console.log(pigImages.Piglet)
    constructor() {
        super()
        this.state = {
            detailDisplay: false,
            hideHog: false
        }
    }

    handleDetails = () => {
        this.setState({
            detailDisplay: !this.state.detailDisplay
        })
    }

    handleHide = () => {
        this.setState({
            hideHog: !this.state.hideHog
        })
    }
    render() {
        let newName = this.props.hog.name.replaceAll(" ", "_").toLowerCase()
        let pigImage = require(`../hog-imgs/${newName}.jpg`)
        
        return (
            <div className="ui eight wide column" className="ui card">
                {this.state.hideHog === true ? null :
                    <div >
                        <h1>{this.props.hog.name}</h1>
                        <div className="image">
                        <img src={pigImage} alt="" width = "200px"/>
                        </div>
                        <div>
                            <button onClick={() => this.handleDetails()}>Show Hog Details</button>
                        </div>
                        {this.state.detailDisplay === true ? <HogDetails hog={this.props.hog}/> : null}
                        <button onClick={() => this.handleHide()}>Hide Hog</button>
                    </div>
                }
            </div>
            )
    }
}



export default HogCard