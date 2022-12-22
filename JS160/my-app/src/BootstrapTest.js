import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const BootstrapTest = (props) => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col>
                    {props.left}
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    )
}

export default BootstrapTest;