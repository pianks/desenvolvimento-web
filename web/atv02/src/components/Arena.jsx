import React from "react";
import Hero from "./Hero";
import Enemy from "./Enemy";
import {HERO_NAME, HERO_IMAGE,ENEMY_NAME,ENEMY_IMAGE} from "./Strings";
import VS from '../assets/vs.gif';

export default function Arena(props){
    return(
        <>
        <h2>
            {props.arena}
        </h2>
        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
            <Hero name = {HERO_NAME} img = {HERO_IMAGE}/>
            <img src={VS}/> 
            <Enemy name = {ENEMY_NAME} img = {ENEMY_IMAGE}/>  
        </div>
        </>
    )
}
