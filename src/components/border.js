import react,{useState} from 'react'


function changeborder(px,e){
    px(e)
}


function Border(){
    const [tl,setTl]=useState(100)
    const [tr,setTr]=useState(100)
    const [bl,setBl]=useState(10)
    const [br,setBr]=useState(10)
    return(
        <div>
        <div style={{border:'5px solid' ,borderRadius: ` ${tl}px  ${tr}px  ${bl}px  ${br}px `,width:'30%',height:'200px',marginLeft:'30px',marginTop:'10px'}}>

        </div><br/>
        <div style={{float:'left',padding:'20px'}}>
            <h1>pixwel values are considered</h1>
        <input type='number' value={tl} placeholder='for top left corner'  onChange={(e)=>changeborder(setTl,e.target.value)}/><br/>
        <input type='number' value={tr} placeholder='for top right corner' onChange={(e)=>changeborder(setTr,e.target.value)}/><br/>
        <input type='number' value={bl} placeholder='for bottom left corner' onChange={(e)=>changeborder(setBl,e.target.value)}/><br/>
        <input type='number' value={br} placeholder='for bottom left corner' onChange={(e)=>changeborder(setBr,e.target.value)}/><br/>
        </div>
        </div>
    )
}

export {Border}