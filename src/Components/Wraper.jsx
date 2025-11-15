import { createContext, useState } from "react";

 export const todocontext = createContext(null)

const Wraper = (props) => {

     const [todos, settodos] = useState([
        {id:1,title:"Task 1", isCompleted:false}
      ])
    
    
  return (
    <div>
      <todocontext.Provider value={[todos, settodos]}>
        {props.children}
      </todocontext.Provider>

    </div>
  )
}

export default Wraper