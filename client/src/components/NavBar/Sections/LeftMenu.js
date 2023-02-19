import React from 'react'
import { Menu } from "andt"

function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href='/'>Home</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/subscription">Subscription</a>
            </Menu.Item>    
        </Menu>
    )
}

export default LeftMenu;