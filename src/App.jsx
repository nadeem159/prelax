import React,{useState} from 'react'
import { Routes , Route} from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Home from './component/Home'
import CloudAccountAdd from './component/CloudAccountAdd'
import Cloud from './component/Cloud'
import Admin from './component/Admin'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CloudAccountEdit from './component/CloudAccountEdit'
import DataBaseControler from './component/DataBaseControler'
import DataBaseViewer from './component/DataBaseViewer'
import SSL from './component/SSL'
import  Ssladd  from './component/Ssladd'
import Reduxget from './component/Reduxget'
// import './App.css'
import Login from './component/login/Login'
import IPadd from './component/IPadd'
const App = () => {

  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cloud/' element={<Cloud/>}/>
    <Route path='/cloud/:id' element={<Cloud/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/cloudaccountadd' element={<CloudAccountAdd/>}/>
    <Route path='/cloud/ssl/edit/:id' element={<CloudAccountEdit/>}/>
    <Route path='/databasecontroler' element={<DataBaseControler/>}/>
    <Route path='/databaseviewer' element={<DataBaseViewer/>}/>
    <Route path='/reduxget' element={<Reduxget/>}/>
    <Route path='/ssl' element={<SSL/>}/>
    <Route path='/ssladd' element={<Ssladd/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/ipadd' element={<IPadd/>}/>
    </Routes>
    </div>
  )
}

export default App