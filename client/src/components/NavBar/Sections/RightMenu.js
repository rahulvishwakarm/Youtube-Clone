import React from "react";
import { Menu } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";


function RightMenu(props) {
    // useSelector allows us to extract data from the Redux store state, using selector function
    const user = useSelector((state) => state.user);

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then((response) => {
            if(response.status===200) {
                props.history.push("/login")
            } else {
                alert("Loutout Failed!!")
            }
        })
    }

    if(user.userData && !user.userData.isAuth) {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <a href="/login">Sign In</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/register">SignUp</a>
                </Menu.Item>
            </Menu>
        )
    } else {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="create">
                    <a href="/video/upload">
                        <img src={Upload} alt="Upload" />
                    </a>
                </Menu.Item>
                <Menu.Item key="logout">
                    <a onClick={logoutHandler}>Logout</a>
                </Menu.Item>
            </Menu>
        )
    }

}

// withRouter - you can accces to the history object properties and the closest
export default withRouter(RightMenu);