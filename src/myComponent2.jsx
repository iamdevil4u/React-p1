import React ,{useState} from "react";
function MyComponent2(){
    const [name,setName] = useState("guest");
    function handleNameChange(event){
        setName(event.target.value);
    }
    const [quantity,setNumber] = useState(0)
    function handleQuantityChange(event){
        setNumber(event.target.value);
    }
    const [coment,setComent] = useState()
    function handleComent(event){
        setComent(event.target.value);
    }
    const [payment,setPayment] = useState();
    function handlePayment(event){
        setPayment(event.target.value);
        
    }
    const [shipping,setshipping] = useState("delevery");
    function handleshipping(event){
        setshipping(event.target.value);

    }

// SPREAD operater dosent change unless the user says too... (...c)
// when we use the first letter of the veriable (for ex 'c' for car ) then that means that we are using the upgrader value of car not the preset value
    const [car,setCar] = useState({year:2024,
                                    make:"ford",
                                    model:"Mustang"

    });
        function handleCarYear(event){
        setCar(c =>({...c,year:event.target.value}));
    }
     function handleCarMake(event){
        setCar(c => ({...c,make:event.target.value}));
    }
     function handleCarModel(event){
        setCar(c=>({...c,model:event.target.value}));
    }
//    ---------------------------------------------

//  Change or Update values in a give array in real time 
const [foods,setFoods] =  useState(["apple","orange","banana"]);

function insertFood(){
    const newFood = document.getElementById("foodInputs").value;
    document.getElementById("foodInputs").value = " ";
    setFoods(f=>[...f,newFood]);
}

function delFood(index){
    setFoods(foods.filter((_,i) => i!== index));
    
}




    return(
    <>
    <div>
        <input value={name} onChange={handleNameChange} type="char"/>
        <p>
            Name:{name}
        </p>
        <input value={quantity} onChange={handleQuantityChange} type = 'number'/>
        <p>Quantity:{quantity}</p>
        
        <textarea value={coment} onChange={handleComent}
        placeholder="heelo there plse enter your responce"/>
        <p>comment:{coment}</p>
        <select value={payment} onChange={handlePayment}
        >
            <option value="">select an option</option>
            <option value="Cash">Cash</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">MasterCard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>payment option:{payment}</p>
        <label>
            <input type="radio" value={"pick up"} 
                    checked={shipping==="pick up"}
                    onChange={handleshipping}/>
            Pick up
        </label>
        <label>
            <input type="radio" value={"delevery"}
                    checked={shipping==="delevery"}
                    onChange={handleshipping}/>
            delevery
        </label>
        <p>shipping:{shipping}</p>
    </div>
   <div>
    <p>your fav car : {car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year} onChange={handleCarYear}/>
    <input type="text" value={car.make} onChange={handleCarMake} />
    <input type="text" value={car.model} onChange={handleCarModel}/>
    </div> 
    <div>
        <h2> Array of Food</h2>
        <ul>
            {foods.map((food,index)=>
            <li key={index} onClick={()=>delFood(index)}>
                {food}
            </li>)}
        </ul>
        <input type="text" id="foodInputs" placeholder="enter your food name"/>
        <button onClick={insertFood}>add food</button>
    </div>
    </>
    );
}
export default MyComponent2