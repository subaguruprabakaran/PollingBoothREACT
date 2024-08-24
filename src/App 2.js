import React from 'react'
import Homepage from './Components/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommentsComp from './Components/Common/CommentsComp'

function App() {

  return (
    <div>

    {/* <Homepage/> */}
<BrowserRouter>
  <Routes>
   
 <Route path="/" element={<Homepage/>} />
  <Route path='/viewcomment' element={<CommentsComp/>}/>
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default App

