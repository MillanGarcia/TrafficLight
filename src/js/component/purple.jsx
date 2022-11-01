import React, { useState,useEffect } from "react";
const Purple=(props)=>{
    const [opened,setOpened]=useState(true);
    const [valor,setValor]=useState(props.color2);
    return <div id="luz" className="w-50 h-50 rounded-circle  me-auto ms-auto mt-2 mb-2 " onClick={()=>switchRed("purple")} style={{backgroundColor: props.color2}}>
        
    </div>
}
export default Purple;