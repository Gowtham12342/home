import React from 'react'
import { Col, Row } from 'reactstrap';
import './NavBar.css';
import { Breadcrumb } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react/cjs/react.development';

const { Search } = Input;

function Navbar({ locationFormHome }) {

    const [locationDropValues, setLocationDropValues] = useState([]);
    const [locationObjectWithValues, setLocationObjectWithValues] = useState({});

    useEffect(() => {

        setLocationObjectWithValues(locationFormHome);


    }, [locationFormHome])

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }



    const menu = (
        <Menu onClick={handleMenuClick}>

            {(Object.keys(locationObjectWithValues).length)
                ?
                (locationObjectWithValues.results.map((e, index) => (
                    <Menu.Item key={index} icon={<UserOutlined />}>
                        {e.formatted_address}
                    </Menu.Item>

                )))
                :
                (
                    <div></div>
                )
            }


            {/* <Menu.Item key="2" icon={<UserOutlined />}>
                menu two
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                menu three
            </Menu.Item> */}
        </Menu>
    );


    return (
        <div>
            <Row>
                <Col>
                </Col>
                <Col lg={6} style={{ color: "white" }}>

                    <Row>
                        <Col>Blog</Col>
                        <Col className="paraUnder">Register As Professional</Col>
                        <Col>Login/Signup</Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop: "9rem" }}>
                <Col>
                    <Breadcrumb style={{ color: "white", display: "flex", justifyContent: "center" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item style={{ color: "white", display: "flex", justifyContent: "center" }} >Chennai</Breadcrumb.Item>
                    </Breadcrumb></Col>
            </Row>
            <Row>

                <Col>
                    <h1 style={{ color: "white", fontSize: "3.4rem", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Search For All Your Needs...!</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4} style={{ display: "flex", justifyContent: "end" }}>  <Dropdown overlay={menu}>
                    <Button style={{ display: "flex", justifyContent: "center" }}>
                        <EnvironmentOutlined />  Location <DownOutlined />
                    </Button>
                </Dropdown></Col>
                <Col lg={5}> <Search placeholder="input search text" enterButton /></Col>
            </Row>
            <Row>
                <Col style={{ display: "flex", justifyContent: 'center', color: "white", fontSize: "1rem" }}><p><u>Massage For Men,Home Painting,Electricions</u> etc </p>
                </Col>
            </Row>
        </div>
    );
}
export default Navbar;