import React,{useState,useRef} from "react";




function  Home(){
    const [binary,setBinary]=useState('')
    // const [decimal,setDecimal]=useState('')
    const decimal=useRef()
    return(
        <div>
            <h2>enter a binary number</h2><br/>
            <input type='text' value={binary} onChange={(e)=>{
                // if(binary.length>=8) { return false}
                // else{ 
                    if (/^(([0-1]{0,8}))$/.test(e.target.value) ){
                    setBinary(e.target.value)}} }
                 placeholder='enter binary number' />


            <button onClick={()=>{

                  if(binary!=='')  decimal.current.innerText=parseInt(binary, 2) 
                   
                //  setDecimal(parseInt(binary, 2));
            }}>submit</button><br/>

             <p ref={decimal}></p>

        </div>
        )
}


export {Home}
// onKeyPress={(e)=>{if(e.target.value.length===8)return false}}