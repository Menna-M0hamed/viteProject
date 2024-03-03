import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import icon from '../assets/icon2.png';


const Headings = ({heading}) => {
  return (
    <Container>
        <Row className='heading'>
            <img src={icon} className='iconImg'/>
            <h1>{heading}</h1>
            <img src={icon} className='iconImg'/>
            </Row>
    </Container>
  )
}

export default Headings