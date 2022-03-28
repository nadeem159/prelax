import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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

    const dbdelete = () => {
        const dbd
    }

  return (
    <div className='container-fluid'>
    <Row>
    {dbname.map((dbitem)=>{
        return(
            <Col span={8} className='me-2 mt-2'>
<div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{dbitem.os}</h5>
    <p className="card-text">{dbitem.host}</p>
    <Link to="/" className="btn btn-primary" onClick={()=> dbdelete{dbitem.id}}>Delete</Link>
  </div>
</div>
</Col>
        )
    })}
    {/* <Col span={8} className='me-2'>
<div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
</Col> */}
</Row>
    </div>
  )
}

export default DataBaseViewer