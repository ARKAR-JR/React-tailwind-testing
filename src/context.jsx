import { createContext, useContext } from "react";

const MyContext = createContext('orange')


function App() {
  return <Fruit name="You have to pay..."/>
}


function Fruit(props) {
  return <Bell gg={props.name}/>
}


function Bell(props) {
  const dada = useContext(MyContext)
  return <h1>{props.gg} + {dada} </h1>
}



export default App;