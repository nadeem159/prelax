import React from 'react'
import 'antd/dist/antd.css'
import 'antd/dist/antd.less'
import { Menu} from 'antd'
import { NavLink } from 'react-router-dom'
import {SettingOutlined } from '@ant-design/icons'
const Navbar = () => {
    const {SubMenu} = Menu
    return (
   <Menu mode='horizontal'>
       <Menu.Item>
         <NavLink to="/"> LOGO</NavLink> 
       </Menu.Item>
      
           <Menu.Item>
           <NavLink to="/"> Home</NavLink> 
           </Menu.Item>
           <Menu.Item>
           <NavLink to="/cloud"> Cloud</NavLink> 
           </Menu.Item>
           <Menu.Item>
           <NavLink to="/cloudserver"> Cloud Server</NavLink> 
           </Menu.Item>
           <Menu.Item>
           <NavLink to="/cloudpayment"> Cloud Payment</NavLink> 
           </Menu.Item>
           <Menu.Item>
           <NavLink to="/ssl"> SSL  </NavLink> 
           </Menu.Item>
           <SubMenu key="SubMenu" icon={<SettingOutlined />} title='Administrator'>
           <Menu.ItemGroup title="Cloud">
            <Menu.Item >
            <NavLink to='cloudaccountadd'>Add Cloud Account Details</NavLink>
            </Menu.Item>
            <Menu.Item >Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4"><NavLink to="ssladd">SSL</NavLink></Menu.Item>
          </Menu.ItemGroup>
           </SubMenu>
      
   </Menu>
  )
}

export default Navbar