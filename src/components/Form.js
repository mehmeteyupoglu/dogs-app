import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Container, Row, Col } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const form = (props) => {
  return (
        <Container>
        <h1>Contact Us</h1>
            <Form>
            <Row>
                <Col xs="6">
                    
                    <FormGroup>
                        <Label for="exampleEmail">First Name</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="" />
                    </FormGroup>

                </Col>
                <Col xs="6">
                    <FormGroup>
                        <Label for="examplePassword">Last Name</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col xs="6">
                    <FormGroup>
                        <Label for="exampleEmail">Company</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="" />
                    </FormGroup>                  

                </Col>

                <Col xs="6">
                    <FormGroup>
                        <Label for="examplePassword">Phone Number</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="phone" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                    <FormGroup>
                        <Label for="exampleEmail">Email Adress</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="url" />
                    </FormGroup>                 

                </Col>

                <Col xs="6">
                    <FormGroup>
                        <Label for="examplePassword">Url</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="email" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="6">
                <FormGroup tag="fieldset">
                <legend>When is the best time of day to reach you?</legend>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Morning
                    </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Evening
                </Label>
                </FormGroup>

                 </FormGroup>         

                </Col>

            
            </Row>
            <Row>
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" />{' '}
                    Check me out
                    </Label>
                </FormGroup>
            </Row>
            <Row>
                <Button color="primary">Submit</Button>
            </Row>
            </Form>
        </Container>
  );
}

export default form
