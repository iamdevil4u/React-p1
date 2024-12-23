import PropTypes from'prop-types'
function Student(props){
    return(<>
        <div className="Student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>student:{props.isStudent ? "yes":"no"}</p>
        </div>
         
        </>
    );
}
Student.propType={
     name:PropTypes.string,
     age:PropTypes.number,
     isStudent:PropTypes.bool,
}
Student.defaultProps={
    name:"guest",
    age:0,
    isStudent:false,
}
export default Student