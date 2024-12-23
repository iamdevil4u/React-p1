import React, { useState } from "react" ;


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat Breakfast","Take a Shower","walk th e dog"]);
    const [newTask,setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask!=""){
        setTasks(t =>[...t,newTask]);
        setNewTask("");
        setCount(count+1);
        }
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter(( _, i ) => i !== index);
        setTasks(updatedTasks);
        setCount(count-1);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    }
    function moveTaskDown(index){
         if(index <tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
         
    }
    const [count,setCount]=useState(tasks.length);
       
    return(<>
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>
            <h2>Total no of task : {count}</h2>
            <div>
                <input
                 type="text"
                  placeholder="Enter a task..."
                   value={newTask}
                    onChange={handleInputChange}/>
            </div>
            {/* we can call 2 function in one buttion like this 👇 */}
            {/* <button className="add-button" onClick={() => {addTask() ; increase();}} >Add</button> */}
            <button className="add-button" onClick={() => {addTask() ; increase();}} >Add</button>
            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>delete</button>
                        <button className="move-button" onClick={()=>moveTaskUp(index)}>👆</button>
                        <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
                        
                    </li>)}
            </ol>
        </div>
    
    </>);
}
export default ToDoList