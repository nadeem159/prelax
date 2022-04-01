import React from 'react'
import 'antd/dist/antd.css'
import 'antd/dist/antd.less'
import { Col, Menu, Row } from 'antd'
import { NavLink } from 'react-router-dom'
import { SettingOutlined,HomeFilled ,CloudOutlined,CloudServerOutlined,DatabaseOutlined,BankOutlined} from '@ant-design/icons'
const Navbar = () => {
  const {SubMenu} = Menu
  return (
<div className='bg bg-black '>
     <Menu mode='horizontal' className='bg text-white bg-dark color'>
         <Menu.Item>
           <NavLink to="/"> <img src='images/left-logo.png' alt='logo' style={{height:"20px"}} /></NavLink> 
         </Menu.Item>
             <Menu.Item>
             <HomeFilled />
             <NavLink to="/" style={{color: 'white', textDecoration: 'none'}}> Home</NavLink> 
             </Menu.Item>
             <Menu.Item>
             <CloudOutlined />
             <NavLink to="/cloud" style={{color: 'white', textDecoration: 'none'}}> Cloud</NavLink> 
             </Menu.Item>
             <Menu.Item>
             <CloudServerOutlined />
             <NavLink to="/cloudserver" style={{color: 'white', textDecoration: 'none'}}> Cloud Server</NavLink> 
             </Menu.Item>
             <Menu.Item>
             <DatabaseOutlined />
             <NavLink to="/databaseviewer" style={{color: 'white', textDecoration: 'none'}}> DB</NavLink> 
             </Menu.Item>
             <Menu.Item>
             <BankOutlined />
             <NavLink to="/cloudpayment" style={{color: 'white', textDecoration: 'none'}}> Cloud Payment</NavLink> 
             </Menu.Item>
             <Menu.Item>
             <NavLink to="/ssl" style={{color: 'white', textDecoration: 'none'}}> SSL  </NavLink> 
             </Menu.Item>
             <SubMenu key="SubMenu" icon={<SettingOutlined />} title='Administrator' className='bg bg-dark text-white' style={{color: 'white', textDecoration: 'none'}}>
             <Menu.ItemGroup style={{color: 'white', textDecoration: 'none'}} title="Cloud" className='bg bg-dark' >
              <Menu.Item >
              <NavLink to='cloudaccountadd' style={{color: 'white', textDecoration: 'none'}}>Add Cloud Account Details</NavLink>
              </Menu.Item>
              <Menu.Item><NavLink to='databasecontroler' style={{color: 'white', textDecoration: 'none'}}>Add DataBase</NavLink></Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2" className='bg bg-dark text-white'>
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4"><NavLink to="ssladd" style={{color: 'white', textDecoration: 'none'}}>SSL</NavLink></Menu.Item>
            </Menu.ItemGroup>
             </SubMenu>
     </Menu>

</div>
  )
}

export default Navbar
