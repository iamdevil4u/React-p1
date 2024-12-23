function Food(){
    const food1="orange";
    const food2="bannana";
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food1+"\t" +food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food