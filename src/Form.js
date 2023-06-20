import React from "react"


export default function Form({onAdd}){ 
    const [text, setText]=React.useState("")
    const [day, setDay]=React.useState("")
    const [remainder, setRemainder]=React.useState(false)
            
      function onSubmit(e){
        e.preventDefault()
        if(!text){
            alert("please add a task")
            return
        }if(!day){
            alert("Please add Day")
            return
        }
         console.log("clicked") 
         onAdd({text, day, remainder})
         setText("")
         setDay("")
         setRemainder(false)
      }  
    return(
        <form onSubmit={onSubmit}>
            <div className="form">
                 <label htmlFor="task">Task</label>
                 <input 
                 placeholder="Add Tasks" 
                 type="text" 
                 id="task"
                 value={text}
                 onChange={(e)=>setText(e.target.value)}
                 
                 />
            </div>
            <div className="form">
                 <label htmlFor="day">Day & Time</label>
                 <input 
                 placeholder="Add Day & Time"
                 type='date'
                 id="day"
                 value={day}
                 onChange={(e)=>setDay(e.target.value)}
                 />
            </div>
            <div className="form checkb">
                <label htmlFor="check">Set Remainder</label>
                <input className="check" 
                checked={remainder}
                type="checkbox"
                onChange={(e)=>setRemainder(e.currentTarget.checked)} 
                />
            </div>
            <div className="form">
                <button className="form-btn">Save Task</button>
            </div>
            
        </form>
    )
}