import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Home from './component/Home'
import CloudAccountAdd from './component/CloudAccountAdd'
import Cloud from './component/Cloud'
import Admin from './component/Admin'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CloudAccountEdit from './component/CloudAccountEdit'
import SSL from './component/SSL'
import  Ssladd  from './component/Ssladd'
const App = () => {
  return (
    <div>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cloud/' element={<Cloud/>}/>
    {/* <Route path='/cloud/:id' element={<Cloud/>}/> */}
    <Route path='/cloudaccountadd' element={<CloudAccountAdd/>}/>
    <Route path='/cloud/edit/:id' element={<CloudAccountEdit/>}/>
    <Route path='/ssl' element={<SSL/>}/>
    <Route path='/ssladd' element={<Ssladd/>}/>
    <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </div>
  )
}

export default App