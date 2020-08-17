import React from 'react'

const Golfers = (props) => {
    const {name, position, score, fpts} = props
 
    return (
    <div className="cardContainer"> 
        <div className="flexbox">
                <h1>{name}  </h1> 
                <p> pos: {position} <span>|</span> {score}  </p>
                <p>fPts: {fpts}</p>
    </div> 
            <div className="flexbox">
                <p>OTT: </p>
                <p>APP: </p>
                <p>ARG: </p>
            </div>
            <div className="flexbox">
                <p>PUT: </p>
                <p>T2G: </p>
                <p>TOT: </p>
            </div>
          </div> 
        )
}

export default Golfers
