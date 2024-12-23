 import img from'./assets/me.jpg'
function Button(){
    
    const styles={
            backgroundColor: "hsl(200,100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor:"grab",
        }
    let count = 0;
    const handleClick=(name) => {
        if (count < 3){
            count ++;
            console.log(`${name} you touched me ${count} times`);
        }
        else
        {
            console.log(`${name} stop touching me `);
        }
    };

    const handleClick2=(e) => e.target.textContent ="ouch 💀";
     const handleClick3=(e) => e.target.style.display ="none";
     
    return(<>
        <button style={styles}>Click me😊<h1>✉️</h1></button>
        <button onClick={()=>handleClick("bro")}>Click me </button>
        
        <button onDoubleClick={(e)=>handleClick2(e)} style={styles}>Dont click me </button>
        <h1>disapear img</h1>
        <img onClick={(e) => handleClick3(e)} src={img}></img>
        </>
    );
}
export default Button