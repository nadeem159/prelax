import React,{useState} from 'react'
import mysql from '../img/mysql.jpg'
import mongodb from '../img/mongodb.png'
import { Form, Input,Row ,Col,Image } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const DataBaseControler = () => {
    const [dbname,setDBname] = useState({
        "os":"",
        "host":"",
        "username":"",
        "password":"",
        "domain":""
    })
    const navigate = useNavigate()
    const inputdb = (dbval) => {
        console.log(dbval.target.name)
        const {name,value} = dbval.target

        setDBname((dbPrevel)=>{
            return {
                ...dbPrevel,
                [name]:value
            }
        })
    }

    const submitDB = async(e) => {
        e.preventDefault()
        const dbreq = await axios.post("http://localhost:3001/dbdetails",dbname).then((dbreq)=>{setDBname(dbreq.data)})
        navigate("/databaseviewer")
        console.log(dbreq)
    }
  return (
    <div className='container-fluid'>
    <div className='main_div'>
    <Row>
        <Col span={12} className="d-flex justify-content-center">
            <Image.PreviewGroup className="d-flex mt-5 align-content-center">
                <Image src={mysql} alt="sql" width={200} height={100} />
                <Image src={mongodb} alt="mogno" width={200} height={100} />
            </Image.PreviewGroup>
        </Col>
        <Col span={12} className="pt-2">

            <form onSubmit={submitDB} >
                <Form.Item label="OS Type" name="Enter Your OS Type">
                <Input onChange={inputdb} name="os" value={dbname.os}/>
                </Form.Item>
                <Form.Item label="HOST">
                <Input onChange={inputdb} name="host" value={dbname.host} />
                </Form.Item>
                <Form.Item label="UserName">
                <Input onChange={inputdb} name="username" value={dbname.username} />
                </Form.Item>
                <Form.Item label="Password">
                <Input onChange={inputdb} name="password" value={dbname.password} />
                </Form.Item>
                <Form.Item label="Domain">
                <Input onChange={inputdb} name="domain" value={dbname.domain} />
                </Form.Item>
                <button className='btn btn-primary' type='submit'>Submit </button>
            </form>
        </Col>
    </Row>
    </div>
    </div>
  )
}

export default DataBaseControler