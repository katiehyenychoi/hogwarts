import React from 'react'

const HogDetails = (props) => {
    return(
        <div>
            <p>Specialty: {props.hog.specialty}</p>
            <p>Weight: {props.hog.weight} pounds</p>
            <p>Highest Medal Achieved: {props.hog['highest medal achieved']}</p>
        </div>
    )
}

export default HogDetails