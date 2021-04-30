import React, { Component } from "react";
import HogCard from "./HogCard.js";

export default class HogCardContainer extends Component {

    render() {
        return (
            <div>

                {this.props.hogs.map(hog => {
                    <HogCard hog={hog} />
                })}
            </div>
        )
    }
}

