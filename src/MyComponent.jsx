import React,{useState} from "react";
function MyComponent(){
    const [name, setName] = useState("guest");
    const updateName = () => {
        setName("sudipto");
    }
    const zero=0;
    const [Age,setAge]  = useState(0);
    const updateAge=()=>{
        setAge(Age+1)
        console.log(Age);//just printing te value in console also 
    }
    const derementAge =()=>{
        setAge(Age-1)
        console.log(Age-1);
        
    }
    const defaultAge=()=>{
        setAge(zero)
        console.log(0);

    }
    const [isEmpoyed,setIsEmployed]=useState(false);
    const toggleEmployedStatus =()=>{
        setIsEmployed(!isEmpoyed);
    }
    const [count,setCount]=useState(0);
    function increase(){
        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
        //or can write this way
        setCount(prevCount=>prevCount+1);
        // updates the value if count(c) in ever line unlike (count+1)
    }
    return(<>
        <div>
            <p style={{color:"red"}}>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>
        <div className="counter-container">
            <p className="count-display">{Age}</p>
            <button onClick={updateAge} className="counter-button">increase my age </button>
            <button onClick={derementAge} className="counter-button">decrease age</button>
            <button onClick={defaultAge} className="counter-button">default</button>

        </div>
    <div>
        <p>Is employee?{isEmpoyed?"yes":"no"}</p>
        <button onClick={toggleEmployedStatus}> toogle</button>
    </div>
<hr></hr>
<p style={{textAlign:"center"}}>{count}</p>
<button  style={{textAlign:"center"}} onClick={increase} > increase</button>

</>

);
}
export default MyComponent