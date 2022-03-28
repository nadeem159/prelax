import React, { useState } from 'react'
import { Row,Col ,  Input} from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Ssladd = () => {

    const [ssl,setSsl] = useState({
        "ssltype":"",
        "domain":"",
        "startdate":"",
        "enddate":""
    })
const navigate = useNavigate()
const inputssl = (val) =>{
    const {name,value} = val.target
// console.log(value)
setSsl((preValue)=>{
        return{
            ...preValue,
            [name]:value
        }
    })
}

    const submitssl = async(e) => {
        e.preventDefault()
       const resultssl = await axios.post("http://localhost:3001/ssl",ssl).then((resultssl)=>{setSsl(resultssl.data)}).then(()=>{navigate("/ssl")}).catch((err)=>{alert(err)})
    //    setSsl(resultssl.data)
        console.loge(resultssl)
    }
  return (
    <div className='container-fluid'>
    <div className='d-flex justify-content-center'>
    <h3>SSL Details</h3>
    </div>
    <div>
   <form onSubmit={submitssl}>
       <Row>
           <Col span={5} className="me-3">
           <label className='d-flex justify-content-center'>SSL type</label>
           <Input type="text" name="ssltype" value={ssl.ssltype} onChange={inputssl} placeholder='Free & Purchase'/>
           </Col>
           <Col span={5} className="me-3">
           <label className='d-flex justify-content-center'>Domain Name</label>
           <Input type="text" name="domain" value={ssl.domain} onChange={inputssl} placeholder='Domain Name'/>
           </Col>
           <Col span={5} className="me-3">
           <label className='d-flex justify-content-center'>Renewal Date</label>
           <Input type="date" name="startdate" value={ssl.startdate} onChange={inputssl} placeholder='Domain Name'/>
           </Col>
           <Col span={5} className="me-3">
           <label className='d-flex justify-content-center'>Renewal Expired Date</label>
           <Input type="date" name="enddate" value={ssl.enddate} onChange={inputssl} placeholder='Domain Name'/>
           </Col>
           <Col span={3} >
           <br/>
               <button className='btn btn-outline-primary text-center' type='submit'>Submit</button>
           </Col>
       </Row>
   </form>
    </div>
    </div>
  )
}

export default Ssladd