import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {achievements} from '../data';
import Headings from './Headings';


const Achievements = () => {
  return (
    <Container className='my-4 py-4'>
      <div className='m-4 pb-3'>
        <Headings heading="إنجازاتنا"/>
      </div>
      <Row className='d-flex justify-content-around py-4 achievements'>
      {achievements.map((achievement) => {
            const {id, image, number, text} =achievement;
            return(
              <Col key={id} className='d-flex flex-column justify-content-center align-items-center py-4'>
                <img src={image}/>
                <h5>{number}</h5>
                <h6>{text}</h6>
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}

export default Achievements