import React from "react"

export default function Button({text,color, onRemove}){
    return <button 
    style={{backgroundColor:color}} className="btnn" onClick={onRemove}>{text}
    </button>
        
}
