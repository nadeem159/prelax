import React, { useEffect, useState } from 'react'
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
    const [sslimg,setsslimg] = useState([])
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

useEffect(()=>{
loadsslimages()
},[])
    const loadsslimages = async () =>{
        const sslimgget = await axios.get("http://localhost:3001/sslimages")
        setsslimg(sslimgget.data)
        // console.log(sslimgget)
    }
    const submitssl = async(e) => {
        e.preventDefault()
       const resultssl = await axios.post("http://localhost:3001/ssl",ssl).then((resultssl)=>{setSsl(resultssl.data)}).then(()=>{navigate("/ssl")}).catch((err)=>{alert(err)})
    //    setSsl(resultssl.data)
        console.loge(resultssl)
    }
  return (
    <div className='container-fluid'>
    <div className='d-flex justify-content-center mt-5'>
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
           
       </Row>
       <Row>
       <Col span={3} className="mt-3">
               <button className='btn btn-outline-primary text-center' type='submit'>Submit</button>
           </Col>
       </Row>
   </form>
    </div>
<Row>
<Col span={24} className="d-flex justify-content-center align-items-center align-content-center">
 <div id="carouselExampleCaptions" className="carousel slide mt-5 d-flex justify-content-center align-items-center align-content-center ms-2" data-bs-ride="carousel" style={{width:"500px"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.servertastic.com/wp-content/uploads/GeoTrustLogo.png" className="d-block w-100 h-25" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://blog.ssdnodes.com/blog/wp-content/uploads/2021/02/Blank-Template-Wallpaper-1.jpg" className="d-block w-100 h-25" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.servertastic.com/wp-content/uploads/GeoTrustLogo.png" className="d-block w-100  h-25" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Col>
    </Row>
    </div>
  )
}

export default Ssladd