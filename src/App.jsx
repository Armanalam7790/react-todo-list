import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {
  const [todos, settodos] = useState([
    {id:1,title:"Task 1", isCompleted:false}
  ])


  return (
    <div className=' text-white flex p-10 w-screen h-screen bg-gray-800  '>
      
     <Create todos={todos} settodos={settodos} /> 
        <hr />
      <Read todos={todos} settodos={settodos} />


    </div>
  )
}

export default App