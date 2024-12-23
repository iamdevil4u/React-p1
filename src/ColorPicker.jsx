import React, {useState} from "react";
function ColorPicker(){
    const [color,setColor] = useState ("#FFFFFF");
    function handleColor(e){
        setColor(e.target.value)
    }
    return(<>
    <div className="color-picker-container">
        <h1>color picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p> selected color:{color}</p>
        </div>
        <label>Select a color</label>
        <input type="color" value={color} onChange={handleColor}/>
    </div>
    
    
    
    </>);
}
export default ColorPicker