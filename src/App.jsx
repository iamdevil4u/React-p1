
import './index.css'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
import Food from './food'
import Cart from './Card'
import Student from './Student'
import UserGreeting from './UsergGreeting'
import List from './list'
import List2 from './List2'
import MyComponent from './MyComponent'
import MyComponent2 from './myComponent2'
import ColorPicker from './ColorPicker'
import CarModel from './carModel'

import ToDoList from './ToDoList'
import './ToDoList.css'

 import MyComponentUseEffect from './MyComponentsUseEffect'

import DigitalClock from './DigitalClock'
import './DigitalClock.css'
import ComponentA from './ComponentA'
function App() {
   const fruits=[{id:1,name:"apple",cal:95},
                    {id:2,name:"orange",cal:45},
                    {id:3,name:"banana",cal:105},
                    {id:4,name:"pineapple",cal:159},
                    {id:5,name:"coconut",cal:37},
                    
                    
    ];
     const fruits2=[{id:1,name:"apple",cal:95},
                    {id:2,name:"orange",cal:45},
                    {id:3,name:"banana",cal:105},
                    {id:4,name:"pineapple",cal:159},
                    {id:5,name:"coconut",cal:37},
                    
                    
    ];
    
  return (
     <>
     
    <Header/>
    <Cart/>
    <Cart/>
    <Button/>
    <Food/>
    <Footer/>
    <Student name="Sudipto Ghosh" age={40} isStudent={true}/>
    <Student name="Sudipto Ghosh" age={40} isStudent1={false}/>
    <Student name="Sudipto Ghosh" age={40} isStudent1={false}/>
    <Student></Student>
    <Student age={40}/>
    <UserGreeting isLoggedIn={true} username ="  sudipto"/>
    <UserGreeting isLoggedIn={false} username ="  sudipto"/>
    <UserGreeting isLoggedIn={1} username ="  sudipto"/>
    <UserGreeting isLoggedIn={1} username ="  sudipto"/>
     {/* 0&1 respresents true and false */}
    <UserGreeting />
    <List/>
    <List2 items={fruits} category="Fruits"/>
    <List2 items={fruits2} category="fruits2"/>    
      
    <MyComponent/>
    <MyComponent2/>
    <ColorPicker/>
    <CarModel/>
      <h1>--------------------------------------------</h1>
    <ToDoList/>
     
    <MyComponentUseEffect/>

    <DigitalClock/>
    <ComponentA/>
     </>
  );
}

export default App
