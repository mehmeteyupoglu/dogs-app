import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Container, Row, Col } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const formValidation = Yup.object().shape({
    firstName: Yup.string()
     .required( 'Please enter your first name' ),
    lastName: Yup.string()
    .required( 'Please enter your last name' ),
    email: Yup.string()
     .email('Please enter a valid email')
     .required('Please enter an email'),
    phoneNumber: Yup.number()
    .positive()
   });

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
            completed: "", 
            checked: false, 

        }}
        onSubmit={(values, {resetForm}) => {
            resetForm({})
        }}
        validationSchema={formValidation}
      >
      {({
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm
      }) => (
        <Container>
        <h1>Contact Us</h1>
            <Form onSubmit={handleSubmit}>

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
                        onChange={handleChange} />
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
                        onChange={handleChange} />
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
                        onChange={handleChange} />
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
                        onChange={handleChange} />
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
                        onChange={handleChange} />
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
                        onChange={handleChange} />
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
                        name="completed"
                        value="morning"
                        checked={values.completed === "morning"}
                        onChange={() => setFieldValue("completed", "morning")} />{' '}
                        Morning
                    </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input 
                    type="radio" 
                    name="completed"
                    value="evening"
                    checked={values.completed === "evening"}
                    onChange={() => setFieldValue("completed", "evening")} />{' '}
                    Evening
                </Label>
                </FormGroup>

                 </FormGroup>         

                </Col>
            
            </Row>

            <Row>
                <FormGroup check>
                <h4> Would you like to receive our email newsletter? </h4>
                    <Label check>
                    <Input 
                    name="checked"
                    type="checkbox"
                    value={values.checked}
                    onChange={handleChange}
                     />{' '}
                   Sure!
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
