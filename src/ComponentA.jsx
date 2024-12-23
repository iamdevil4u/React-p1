import React,{ useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA(){
    
const [user,setUser]=useState("sudipto");
    return(<>
    <h3>basically we can transpher data or connext data form one component to other using "prop" function so define user value in component a bit stioll can acces it accross compnent d </h3>    
    <div className="box">
        <h1>ComponentA</h1>
        <h2>{`hello:${user}`}</h2>
        <ComponentB user={user }/>
    </div>
    
    </>);
}

export  default ComponentA;