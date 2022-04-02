import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {Ssldemo} from "../controller/Ssldemo"
const Reduxget = () => {
    const dispatch = useDispatch()
     const {loader,users} = useSelector(state => state.users)
    useEffect(()=>{
        dispatch(Ssldemo())
    },[])


  return !loader ? (<div>
    <table className='table'>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user,index)=>(
          <tr>
          <th>{index + 1}</th>
          <th>{user.ssltype}</th>
          <th>{user.domain}</th>
          <th>{user.startdate}</th>
          <th>{user.enddate}</th>
          <th><Link to="/">Edit</Link></th>
        </tr>
       
      ))}
    </tbody>
    </table>
  </div>):<div className='d-flex justify-content-center'>
    <div className='spinner-border' role="states">
    <span className='visually-hidden'>Loading ...</span>
    </div>
  </div> 
}

export default Reduxget