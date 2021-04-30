import React, { Component } from "react";
import porkers_data from "../porkers_data.js";

// let pigURL = this.props.



class HogCard extends Component {
    // console.log(pigImages.Piglet)

    render() {
        let newName = this.props.hogs.name.replace(' ', '_').toLowerCase()
        console.log(newName)
        return (
            <div>
                {



                    this.props.hogs.map(hog => {
                        // console.log(`../hog-imgs/${pigImages[`${hog.name}`]}.jpg`)
                        // let pigImage = require(`../hog-imgs/${pigImages[`${hog.name}`]}.jpg`)
                        // console.log(pigImage)
                        return (<div>
                            <h1>{hog.name}</h1>
                            {/* { <img src={pigImage} alt="" />} */}
                            {/* <h2> specialty</h2>
                    <h3>weight</h3>
                    <h4>'highest medal achieved'</h4> */}
                        </div>
                            // )
                        )
                    })
                }
            </div >
        )
    }
}



export default HogCard