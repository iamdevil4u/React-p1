
function List(props){
    // const fruit=["apple","orange","banana","pineapple"];
    // const listItems=fruit.map(fruit=><li>{fruit}</li>);
    const fruits=[{id:1,name:"apple",cal:95},
                    {id:2,name:"orange",cal:45},
                    {id:3,name:"banana",cal:105},
                    {id:4,name:"pineapple",cal:159},
                    {id:5,name:"coconut",cal:37},
                    
    ];
    //sortinggggg
    fruits.sort((a,b)=>a.name.localeCompare(b.name));
    const listItems = fruits.map(fruits => <li key={fruits.id}>{fruits.id}:&nbsp;{fruits.name}:<b>{fruits.cal}</b></li>);
    fruits.sort((b,a)=>a.name.localeCompare(b.name));
    const listItems2 = fruits.map(fruits => <li key={fruits.id}>{fruits.id}:&nbsp;{fruits.name}:<b>{fruits.cal}</b></li>);
    fruits.sort((a,b)=>a.cal-b.cal);
    const listItems3 = fruits.map(fruits => <li key={fruits.id}>{fruits.id}:&nbsp;{fruits.name}:<b>{fruits.cal}</b></li>);
    

    // FILTERING foosds which has more than 100 cal
    const highCalFruits=fruits.filter(fruits=>fruits.cal >= 100);
    const listItems4 = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>{highCalFruits.id}:&nbsp;{highCalFruits.name}:<b>{highCalFruits.cal}</b></li>);
    return(
    <>
    <ul className="list-items">{listItems}</ul>
    <ul>{listItems2}</ul>
    <ul>{listItems3}</ul>
    <ul>{listItems4}</ul>

    </>
    );
    
}


export default List 