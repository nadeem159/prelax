import React, { useEffect, useState } from 'react'
import { Row,Col,Input} from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const CloudAccountEdit = () => {

    const {id} = useParams()
    const [name,setName] = useState([])
    const inputData = (val)=>{
        const {name,value} = val.target
      console.log(value)
        setName((preVel)=>{
          return {
            ...preVel,
            [name]:value
          }
        })
    }
    const navigate = useNavigate()
useEffect(()=>{
    loadData()
},[])

const inputsubmit = async(e) =>{
e.preventDefault()
const result = await axios.put(`http://localhost:3001/cloud/${id}`,name).then((result)=>{navigate("/cloud")})
setName(result.data)
console.log(result)
}
const loadData = async() => {
    const result = await axios.get(`http://localhost:3001/cloud/${id}`)
    setName(result.data)
    console.log(result)
}
  return (
<div className='container-fluid'>
    <Row>
        <Col className='d-flex justify-content-center' span={24}>
        <h1> Edit Account Details</h1>
        </Col>
    </Row>
    <form onSubmit={inputsubmit}>
    <Row className='d-flex justify-content-center'>
    <Col span={8}>
         <label className='d-flex justify-content-center'>Cloud Vender Name</label>
        <Input type="text" onChange={inputData} name="cloudvender" value={name.cloudvender}/>
       </Col>
    </Row>
    <Row className='d-flex justify-content-center'>
    <Col span={8}>
         <label className='d-flex justify-content-center'>Cloud Email</label>
        <Input type="text" onChange={inputData} name="cloudemail" value={name.cloudemail}/>
       </Col>
    </Row>
    <Row className='d-flex justify-content-center'>
    <Col span={8}>
         <label className='d-flex justify-content-center'>Cloud Password</label>
        <Input type="text" onChange={inputData} name="cloudpassword" value={name.cloudpassword}/>
       </Col>
    </Row>
    <Row className='d-flex justify-content-center'>
    <Col span={8}>
         <label className='d-flex justify-content-center'>Cloud Access Key</label>
        <Input type="text" onChange={inputData} name="cloudaccess" value={name.cloudaccess}/>
       </Col>
    </Row>
    <Row className='d-flex justify-content-center'>
    <Col span={8}>
         <label className='d-flex justify-content-center'>Cloud Secret Key</label>
        <Input type="text" onChange={inputData} name="cloudsecret" value={name.cloudsecret}/>
       </Col>
    </Row>
    <Row className='d-flex justify-content-center'>
<Col>
    <button type='submit' className='btn btn-warning mt-3'>Updated</button>
</Col>
    </Row>
    </form>
</div>
  )
}

export default CloudAccountEdit