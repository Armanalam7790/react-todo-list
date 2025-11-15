import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {
 


  return (
    <div className=' text-white flex p-10 w-screen h-screen bg-gray-800  '>
      
     <Create  /> 
        <hr />
      <Read  />


    </div>
  )
}

export default App