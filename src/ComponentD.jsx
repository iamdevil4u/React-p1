
function ComponentD(props){
    

    return(<>
    
    <div className="box">
        <h1>ComponentD</h1>
        <h2>{`bye: ${props.user}`}</h2>
        <p>props carried the data of user from component a throgh compoB,CompC tooo D and ufc by importing we link the files together</p>
    </div>
    
    </>);
}
export  default ComponentD;