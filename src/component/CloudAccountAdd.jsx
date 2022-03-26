import React, { useState } from 'react'
import { Row,Col,Input} from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CloudAccountAdd = () => {
    const [name,setName] = useState({
        "cloudvender":"",
        "cloudemail":"",
        "cloudpassword":"",
        "cloudaccess":"",
        "cloudsecret":""
    })
    const navigate=useNavigate()
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

    const inputsubmit = async(e) =>{
    e.preventDefault()
    const result = await axios.post("http://localhost:3001/cloud",name).then((result)=>{navigate("/cloud")})
    setName(result.data)
    console.log(result)
    }
  return (
   <div className='container-fluid'>
    <div>
     <Row justify='center' className='mt-5'>
        <Col>
         <h1>   Add Account Details</h1>
        </Col>
     </Row>
     <form onSubmit={inputsubmit}>
    <Row>
      <Col span={24}>
        <label>Cloud Vender Name</label>
        <Input type="text" onChange={inputData} name="cloudvender" value={name.cloudvender}/>
      </Col>
      <Col span={24}>
      <label>Email Address</label>
        <Input type="text" onChange={inputData} name="cloudemail" value={name.cloudemail}/>
      </Col>
      <Col span={24}>
      <label>Password</label>
        <Input type="password" onChange={inputData} name="cloudpassword" value={name.cloudpassword}/>
      </Col>
      <Col span={24}>
      <label>Access Key</label>
        <Input type="text" onChange={inputData} name="cloudaccess" value={name.cloudaccess}/>
      </Col>
      <Col span={24}    >
      <label>Secret Key</label>
        <Input type="text" onChange={inputData} name="cloudsecret" value={name.cloudsecret}/>
      </Col>
      <Col>
      <button type="submit" className='mt-3 btn btn-primary'>Submit</button>
      </Col>
    </Row>

     </form>
    </div>
   </div>
  )
}

export default CloudAccountAdd