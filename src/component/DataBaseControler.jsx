import React,{useState} from 'react'
import mysql from '../img/mysql.jpg'
import mongodb from '../img/mongodb.png'
import { Form, Input,Row ,Col,Image } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const DataBaseControler = () => {
    const [dbname,setDBname] = useState({
         "type":"",
         "host":"",
         "port":"",
         "dbname":"",
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
        const dbreq = await axios.post("http://localhost:3001/dbdetails",dbname).then((dbreq)=>{setDBname(dbreq.data)}).catch((error)=>{alert(error.massage)})
        navigate("/databaseviewer")
        console.log(dbreq)
    }
  return (
    <div className='container-fluid'>
    <div className='main_div mt-5'>
    <Row className=''>
        <div  className="d-flex align-content-center justify-content-center col col-6 align-content-center align-items-center justify-content-evenly">
            <Image.PreviewGroup className="d-flex">
                <Image src={mysql} alt="sql" width={200} height={100} />
                <Image src={mongodb} alt="mogno" width={200} height={100} />
            </Image.PreviewGroup>
        </div>
        <div  className="col col-6">
            <form onSubmit={submitDB} >
                <Form.Item label="TYPE">

                <Input onChange={inputdb} name="type" value={dbname.type} placeholder="sql or mongo"/>
                </Form.Item>
                <Form.Item label="HOST">
                <Input onChange={inputdb} name="host" value={dbname.host} />
                </Form.Item>
                <Form.Item label="PORT">
                <Input onChange={inputdb} name="port" value={dbname.port} />
                </Form.Item>
                <Form.Item label="DB NAME">
                <Input onChange={inputdb} name="dbname" value={dbname.dbname} />
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
        </div>
    </Row>
    </div>
    </div>
  )
}

export default DataBaseControler