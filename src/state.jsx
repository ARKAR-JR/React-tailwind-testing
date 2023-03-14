import { useState } from "react";

function App() {


  const [bobo, setBobo] = useState([
    {id: 1, name: "mango", colors: "green"},
    {id: 2, name: "apple", colors: "red"},
    {id: 3, name: "banana", colors: "yellow"}
  ]);



  return (
    <div>
      {bobo.map((b) => {
        return (
          <h1 key={b.id}>{b.name} 
         color:{b.colors}</h1>
        )
      })}
    </div>
  )
};

export default App;