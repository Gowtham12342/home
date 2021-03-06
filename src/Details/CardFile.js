import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Row, Col } from 'reactstrap'
const { Meta } = Card;




function CardFile({ jobFromData, priceFromData, ratingFromData, descriptionFormData, calcSet, newSet }) {
  return (
    <Card
      style={{ width: 325, height: "fit-content",borderColor:"gray",marginRight:"13rem" }}
      cover={
        <div className='carding'style={{display:"flex"}} >
          <>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="250"
              display="flex"
              justifyContent="center"
              
                         
            />
          </>
        </div>
      }

    >

      <Row>
        <Col>
          <h6>
            <b>{jobFromData}</b></h6>

        </Col>
        <Col lg={12}>
          <Row>{priceFromData}</Row>
          <Col>

            <Row>
              <div className='rating' style={{ color: "green" }}><StarOutlined /><b>{ratingFromData
              }</b>

              </div>
            </Row></Col>
          <Row><u><p><h6><b>Description</b></h6></p></u>{descriptionFormData.indexOf(",") != -1 ? descriptionFormData.split(",").map(e=>(
      <Row style={{    color : "#302929",
        marginRight : "6px"}}>
        <Col>
      *{e}</Col>
      </Row>

          )):
          <Row>{descriptionFormData}</Row>
        }</Row>
        </Col>
        <Col style={{ marginLeft: "10rem", display: "flex", justifyContent: "space-around" }}>
        
          <Button
          
          onClick={()=>{newSet(jobFromData, priceFromData, ratingFromData, descriptionFormData)}}
            style={{ display: "inline" }} type='primary'>
            -
          </Button>
          <Button

            style={{

              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "-webkit-fill-available"
            }}

            type='primary' ghost >



            Add

          </Button>
          
          <Button
          onClick={()=>{calcSet (jobFromData, priceFromData, ratingFromData, descriptionFormData)}}
            style={{ display: "inline" }} type='primary'>
              +
          </Button>
        </Col>



      </Row>


    </Card>
  );
}

export default CardFile;