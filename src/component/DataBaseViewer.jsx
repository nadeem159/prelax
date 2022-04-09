import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import mysql from "../img/mysql.jpg"

const DataBaseViewer = () => {
    const [dbname,setDBname]=useState([])
    
    const {id} = useParams()
useEffect(()=>{
    loaddbData()
},[])

    const loaddbData = async() =>{
        const dbdata = await axios.get("http://localhost:3001/dbdetails")
        setDBname(dbdata.data)
        // console.log(setDBname)
    }

    // console.log(dbname)

    const dbdelete = async(id) => {
        const dbdata = await axios.delete(`http://localhost:3001/dbdetails/${id}`)
        loaddbData()
    }

  return (
    <div className='container-fluid'>
    <Row>
    {dbname.map((dbitem)=>{
        return(
            <Col span={8} className='me-2 mt-2 d-flex'>
<div className="card">
  <img src={mysql} className="card-img-top" alt="sql" style={{width:"240px"}} />
  <div className="card-body">
    <p className="card-text">{dbitem.type}</p>
    <p className="card-text">{dbitem.host}</p>
    <p className="card-title">{dbitem.port}</p>
    <p className="card-title">{dbitem.dbname}</p>
    <p className="card-text">{dbitem.username}</p>
    <p className="card-text">{dbitem.password}</p>
    <p className="card-text">{dbitem.domain}</p>
    <Link to="/databaseviewer" className="btn btn-primary" onClick={()=> dbdelete(dbitem.id)}>Delete</Link>
  </div>
</div>
</Col>
        )
    })}
</Row>
    </div>
  )
}

export default DataBaseViewer