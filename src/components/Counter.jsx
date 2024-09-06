import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name,setName]=useState("waleed");
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
    const changeName=()=>{
      setName("Rami");
      console.log("name updated");
    }
    return (
      <>
        <h1>count: {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <h2>name is {name}</h2>
        <button onClick={changeName}>changeName</button>
      </>
    );
}
