import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import kid from '../assets/k6.png';
import Headings from './Headings';
import { Link } from 'react-router-dom';


const Creativity = () => {
  return (
    <Container className='my-4' id='cre'>
      <div className='m-4'>
        <Headings heading="إبداعات أبناء الإسلام"/>
      </div>
      <Row className='my-4 d-flex justify-content-md-between justify-content-sm-center flex-wrap who'>
        <Col className='col-md-4 col-sm-10'><img src={kid} className='w-100 h-100'/></Col>
        <Col className='edit col-md-6 col-sm-10 d-flex align-items-center justify-content-right mt-4'>
        <div style={{textAlign: "right"}}>
          <h4>تنمية مهارات الأبناء هى أحد أولوياتنا فى برنامج صبغة الله لذا قمنا بإنشاء معرضا لإبداعات أبنائنا. يمكنكم الانضمام له من هنا</h4>  
          <br/>
          <br/>
          <Link to="/"><button className='myBtn'>شاهد إبداعات الأبناء</button></Link>
        </div>
        </Col>
      </Row>
      <div className='mb-4'></div>
    </Container>
  )
}

export default Creativity