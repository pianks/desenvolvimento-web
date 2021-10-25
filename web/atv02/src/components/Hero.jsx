import React from "react";

export default function Hero(props) {
    return(
        <div>
            <h2>
                Hero name: {props.name}
            </h2>
            <img src={props.img}/>
        </div>
    )
}