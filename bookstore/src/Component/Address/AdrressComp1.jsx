import React from "react";
import "../Address/AdrdressComp1.css"
function AddrressComp1(props){

    const openComp2=()=>{
        props.toggling();
    }
    return(
        <div  className="mainAddComp1" onClick={openComp2}>
            Address Details
        </div>
    )
}
export default AddrressComp1