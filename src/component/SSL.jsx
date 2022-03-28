import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, NavLink, useNavigate, useParams } from 'react-router-dom'

const SSL = () => {
  const [sslName,setSslName]=useState([])
  const {id} = useParams()
  const navigate = useNavigate()
useEffect(()=>{
loadSslData()
},[])
  const loadSslData = async() =>{
    const resultssl = await axios.get("http://localhost:3001/ssl").then((resultssl)=>{setSslName(resultssl.data)})
  }
  const deleteSsl = async(id) =>{
    const resultssl = await axios.delete(`http://localhost:3001/ssl/${id}`)
    loadSslData()
  }
  // console.log(id)
  // console.log(deleteSsl)
  return (
    <div className='container-fluid'>
  <table className='table'>
    <thead>
      <tr>
        <th>#</th>
        <th>Type</th>
        <th>Domain Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {sslName.map((sslVal)=>{
      return(
        <>
        <tr>
          <th key={sslVal.id}>{sslVal.id}</th>
          <th key={sslVal.id}>{sslVal.ssltype}</th>
          <th key={sslVal.id}>{sslVal.domain}</th>
          <th key={sslVal.id}>{sslVal.startdate}</th>
          <th key={sslVal.id}>{sslVal.enddate}</th>
          <th>
            <NavLink to="/" className="btn btn-primary me-2">Edit</NavLink>
            <NavLink to="/ssl" className="btn btn-danger" onClick={()=>{deleteSsl(sslVal.id)}}>Delete</NavLink>
          </th>
        </tr>
      </>
      )
    })}
    </tbody>
  </table>
    </div>
  )
}

export default SSL