import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import who from '../assets/Neeew/13.png';
import icon from '../assets/icon.png';
import Headings from './Headings';



const WhoAreWe = () => {
  return (
    <Container className='my-4'>
      <div className='m-4'>
        <Headings heading="من نحن"/>
      </div>
      <Row className='my-4 d-flex justify-content-md-between justify-content-sm-center flex-wrap who'>
        <Col className='col-md-4 col-sm-10'><img src={who} className='w-100 h-100'/></Col>
        <Col className='edit col-md-6 col-sm-10 d-flex align-items-center justify-content-right mt-4'>
        <div>
          <h4>برنامج صبغة الله هو برنامج تعليمى دعوى باشراف الشيخ حسين عبدالرازق. يهتم بأبناء الإسلام من سن ال4 سنوات الى سن ال16. مقسمون الى فئات.. بهدف تنشئتهم على قيم الإسلام والحفاظ على فطرتهم</h4>
          <br/>
          <br/>
          <h5>أعظم ما نسعى إليه هو أن يعى ابن الإسلام هذه الامور</h5>
          <Row className='d-flex justify-content-end'>
            <p style={{display: 'contents'}}>لماذا هو مسلم؟</p>
            <img src={icon} className='iconImg'/>
          </Row>
          <Row className='d-flex justify-content-end'>
            <p style={{display: 'contents'}}>وماذا يعنى أنه مسلم لرب العالمين؟</p>
            <img src={icon} className='iconImg'/>
          </Row>
          <Row className='d-flex justify-content-end'>
            
            <p style={{display: 'contents'}}>وكيف يعيش فى الحياة الدنيا مسلما لله محسنا؟</p>
            <img src={icon} className='iconImg'/>
          </Row>   
        </div>
        </Col>
      </Row>
      <div className='mb-4'></div>
    </Container>
  )
}

export default WhoAreWe