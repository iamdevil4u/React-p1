import React , {useState,useEffect} from "react";
function MyComponentUseEffect(){
     const[count,setCount]=useState(0);
    const[color,setColor] = useState("green");
    useEffect(()=>{
        document.title = `Count:${count} ${color}`
    });

     function addCount(){
        setCount(c=>c+1);
     }
     function subCount(){
        setCount(c=>c-1);
     }
    function changeColor(){
        setColor(c=> c=== "green" ? "red" : "green");
    }

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setheight] = useState(window.innerHeight);
    // makes it show realtime resizing

    // window.addEventListener("resize",handleResize);
    // console.log("event list added");

    // useEffect gives us the power to set a parameter for the function to execte for example the above function 👆 will show us real time changes in screen but it will also print a thousents of consle.log for ever small change to make soo to prevent that we will use useEffect we make it work like print consol.log() when ever the user has stopped to move or resize the brozar below 👇

    useEffect(()=>{
         window.addEventListener("resize",handleResize);
        console.log("event list added");
    },[]);

    function handleResize(){
        setheight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    return(<>
    
    <p style={{color:color}}>Count:{count}</p>
    <button onClick={()=>{addCount()}}>  add</button>
    <button onClick={subCount}> sub</button><br/>
    <button onClick={changeColor}>Change color</button>
    <p>window width: {width}</p>
    <p>window height: {height}</p>
    </>);
}

export default MyComponentUseEffect