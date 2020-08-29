import React from 'react'

export default function BoilingVerdict({celsius}) {
    if(celsius>=100){
        return (
            <div className="container alert alert-success">
                <p>L'eau boue</p>
            </div>
        )
    }else{
        return(
            <div className="container alert alert-danger">
                <p>L'eau ne boue pas</p>
            </div>
        )
    }
}
