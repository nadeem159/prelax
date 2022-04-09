import React from 'react'
import 'antd/dist/antd.css'
import 'antd/dist/antd.less'
import { Col, Menu, Row } from 'antd'
import { NavLink } from 'react-router-dom'
import { SettingOutlined, HomeFilled, CloudOutlined, CloudServerOutlined, DatabaseOutlined, BankOutlined } from '@ant-design/icons'
const Navbar = () => {
  const { SubMenu } = Menu
  return (
    <div className='bg bg-black '>
      <Menu mode='horizontal' className='bg text-white bg-dark color d-flex justify-content-center align-items-center' style={{ height: "75px" }}>
        <Menu.Item>
          <NavLink to="/"> <img src='images/left-logo.png' alt='logo' style={{ height: "20px" }} /></NavLink>
        </Menu.Item>
        <Menu.Item>
          <HomeFilled />
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}> Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <CloudOutlined />
          <NavLink to="/cloud" style={{ color: 'white', textDecoration: 'none' }}> Cloud</NavLink>
        </Menu.Item>
        <Menu.Item>
          <CloudServerOutlined />
          <NavLink to="/cloudserver" style={{ color: 'white', textDecoration: 'none' }}> Cloud Server</NavLink>
        </Menu.Item>
        <Menu.Item>
          <DatabaseOutlined />
          <NavLink to="/databaseviewer" style={{ color: 'white', textDecoration: 'none' }}> DB</NavLink>
        </Menu.Item>
        <Menu.Item>
          <BankOutlined />
          <NavLink to="/cloudpayment" style={{ color: 'white', textDecoration: 'none' }}> Cloud Payment</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/ssl" style={{ color: 'white', textDecoration: 'none' }}> SSL  </NavLink>
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title='Administrator' >
          <Menu.ItemGroup >
            <Menu.Item >
              <NavLink to='/cloudaccountadd'>Add Cloud Account Details</NavLink>
            </Menu.Item>
            <Menu.Item><NavLink to='/databasecontroler' >Add DataBase</NavLink></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup>
            <Menu.Item >
              <NavLink to="/reduxget" >Redux</NavLink>
            </Menu.Item>
            <Menu.Item >
              <NavLink to="/ssladd"><span>SSL</span></NavLink>
            </Menu.Item>
            <Menu.Item >
              <NavLink to="/ipadd"><span>Add IP</span></NavLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Navbar
