import PropTypes, { number } from'prop-types'
function List2(props){
    const category = props.category;
    const itemList=props.items;
    const listItems= itemList.map(items => <li key={items.id}>
        {items.name}:<b>{items.cal}</b>
    </li> );
    return(<>
        <h1 className="list-category">{category}</h1>
        <ol className="list-items">{listItems}</ol>
    </>);
}

List2.propType={
     category:PropTypes.string,
    //  its different way to declare arry object  types 
     items:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number,
            name:PropTypes.string,
            cal:PropTypes,number
     })),
}
List2.defaultProps={
    category:"Category",
    items:[],
    
}
export default List2