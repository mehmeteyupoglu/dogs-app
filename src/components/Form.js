import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Container, Row, Col } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const form = (props) => {
  return (
      <Formik
        initialValues={{
            firstName : "", 
            lastName : "", 
            company : "", 
            phoneNumber: "", 
            emailAdress: "",
            url: "", 

        }}
        onSubmit={(values) => {
            console.log(values)
        }}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Container>
        <h1>Contact Us</h1>
            <Form>

            <Row>
                <Col xs="6">
                    
                    <FormGroup>
                        <Label for="exampleFirstName">First Name</Label>
                        <Input 
                        type="text" 
                        name="firstName" 
                        id="name" 
                        placeholder=""
                        value={values.firstName}
                        onchange={handleChange} />
                    </FormGroup>

                </Col>
                <Col xs="6">
                    <FormGroup>
                        <Label for="exampleLastName">Last Name</Label>
                        <Input 
                        type="text" 
                        name="lastName" 
                        id="name" 
                        placeholder=""
                        value={values.lastName}
                        onchange={handleChange} />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col xs="6">
                    <FormGroup>
                        <Label for="company">Company</Label>
                        <Input 
                        type="text" 
                        name="company" 
                        id="company" 
                        placeholder=""
                        value={values.company}
                        onchange={handleChange} />
                    </FormGroup>                  

                </Col>

                <Col xs="6">
                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input 
                        type="phone" 
                        name="phoneNumber" 
                        id="phoneNumber" 
                        placeholder="phone"
                        value={values.phoneNumber}
                        onchange={handleChange} />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col xs="6">
                    <FormGroup>
                        <Label for="exampleEmail">Email Adress</Label>
                        <Input 
                        type="email" 
                        name="emailAdress" 
                        id="exampleEmail" 
                        placeholder="email"
                        value={values.emailAdress}
                        onchange={handleChange} />
                    </FormGroup>                 

                </Col>

                <Col xs="6">
                    <FormGroup>
                        <Label for="url">Url</Label>
                        <Input 
                        type="url" 
                        name="url" 
                        id="url" 
                        placeholder="url"
                        value={values.url}
                        onchange={handleChange} />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col xs="6">
                <FormGroup tag="fieldset">
                <legend>When is the best time of day to reach you?</legend>
                <FormGroup check>
                    <Label check>
                        <Input 
                        type="radio" 
                        name="morning" />{' '}
                        Morning
                    </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="evening" />{' '}
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
      )} 
    </Formik>
  );
}

export default form
