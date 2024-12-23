  import img from'./assets/me.jpg'
 
function Cart(){
    return(<>
        <div className="card">
            <img className="card-image" src={img} alt="my pic"></img>
            <h2 className="card-title">
                sudipto ghosh
            </h2>
            <p className="card-text">Im going to be a developer</p>
         
        </div>
        <div className="card">
            <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Kilb6oMIDH6w10eCixLl8OQC0HLuuGAe9w&s"  alt="profile picture"></img>
            <h2 className="card-title">
                sudipto ghosh
            </h2>
            <p className="card-text">Im going to be a developer</p>
            
        </div>
        </>
    );
}
export default Cart