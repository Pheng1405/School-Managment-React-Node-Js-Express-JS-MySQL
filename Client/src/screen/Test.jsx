import { useState } from "react";

const Test = () =>{
    const [text, setText] = useState("HELLO HTML");
    const [state, setState] = useState(false);

    const handleClick = () =>{
        console.log("Work");

        if(!state){
            setText("Hello CSS");
            setState(true);
        }
        else{
            setText("Hello HTML");
            setState(false);
        }
       
    }

    return(
        <>
            <h1 >{text}</h1>
            <button id="click" onClick={()=>{handleClick()}}>Click</button>
        </>
    );
}
export default Test;