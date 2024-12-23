import PropTypes from 'prop-types'
function UserGreeting(props){
//     if(props.isLoggedIn==true)
//     return (
        
//             <h2 className="welcome-message">welcome{props.username}</h2>
        
//     );
//     else
//     return(
     
//         <h2 className="login-prompt">plse login{props.username}</h2>
    
// );

// or you can use this ternary operation also 


// return(props.isLoggedIn ? <h2 className="welcome-message">welcome {props.username}</h2> : <h2 className="login-prompt">plse login {props.username}</h2>)

// it says if (props.isLoggedIn) is true then(?) print <h2>starement (:)else print <h2> statement

// orrrrrrrrrrrrrrrrrr we can use this too 
 const welcomeMessage =<h2 className="welcome-message">welcome{props.username}</h2>
 const loginPrompt =  <h2 className="login-prompt">plse login{props.username}</h2>
return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.Proptypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"  "+"guest",
}
export default UserGreeting