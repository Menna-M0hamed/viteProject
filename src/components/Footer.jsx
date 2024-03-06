import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container className='py-3 footer' id='call'>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col>
        <div className='d-flex justify-content-center flex'>
          <div className='socialIcon'>
            <Link to="https://www.youtube.com/channel/UCxik2NdZbi-_Zsi16ZBHnng"><i className="fa-brands fa-youtube"></i></Link>
          </div>
          <div className='socialIcon'>
            <Link to=""><i className="fa-brands fa-facebook"></i></Link>
          </div>
          <div className='socialIcon'>
            <Link to="https://t.me/s/HusseinAhmed1983?before=5740"><i className="fa-brands fa-telegram"></i></Link>
          </div>
          <div className='socialIcon'>
            <Link to=""><i className="fa-brands fa-square-instagram"></i></Link>
          </div>
        </div>
        </Col>
        <div className='div' style={{flex:'auto'}}>
        <div className='socialIcon gmail'>
            <h6><i className="fa-solid fa-envelope"></i> islamkidshome@gmail.com</h6>
        </div>
        </div>
        
      </Row>
    </Container>
  )
}

export default Footer
