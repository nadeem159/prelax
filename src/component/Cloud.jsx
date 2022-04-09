import React, { useEffect, useState } from 'react'
import { Row, Card, Col } from 'antd'
import axios from 'axios'
import Item from 'antd/lib/list/Item'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Cloud = () => {
  const navigate = useNavigate()
  const [name, setName] = useState([])
  useEffect(() => {
    loadData()
  }, [])
  const { id } = useParams()
  const loadData = async () => {
    const result = await axios.get("http://localhost:3001/cloud")
    setName(result.data)
  }

  const deleteData = async (id) => {
    const result = await axios.delete(`http://localhost:3001/cloud/${id}`)
    loadData()
  }
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cloud Vender</th>
          <th scope="col">Email Address</th>
          <th scope="col">Password</th>
          <th scope="col">Access Key</th>
          <th scope="col">Secret</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody >
        {name.map((val,index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{val.cloudvender}</td>
              <td>{val.cloudemail}</td>
              <td>{val.cloudpassword}</td>
              <td>{val.cloudaccess}</td>
              <td>{val.cloudsecret}</td>
              <td >
                <Link to="" className='btn btn-info me-2'>View</Link>
                <Link to={`/cloud/ssl/edit/${val.id}`} className='btn btn-warning me-2' >Edit</Link>
                <Link to="" className='btn btn-danger' onClick={() => deleteData(val.id)}>Delete</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Cloud