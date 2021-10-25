import React from "react";

export default function Enemy(props) {
    return(
        <div>
            <h2>
                Enemy name: {props.name}
            </h2>
            <img src={props.img}/>
        </div>
    )
}