import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import Header from "components/Headers/Header.jsx";

const NewCustomer = props => {
  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    // const { firstName, lastName, email, phone } = newCustomer;
    const firstName = newCustomer.firstName;
    const lastName = newCustomer.lastName;
    const email = newCustomer.email;
    const phone = newCustomer.phone;
    // checking to see if vavlues log
    console.log(firstName, lastName, email, phone);
    props.addCustomer({ firstName, lastName, email, phone });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value
    });
  };

  return (
    <>
      <Header />
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-muted text-center mt-2 mb-3">
            <h2>New Customer</h2>
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <Form onSubmit={handleFormSubmit}>
            <h6 className="heading-small text-muted mb-4">New Customer</h6>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-first_name"
                    >
                      First_name
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue="first_name"
                      id="input-first_name"
                      placeholder="First_name"
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-last_name"
                    >
                      Last_name
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-last_name"
                      placeholder="last_name"
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-email">
                      Email
                    </label>
                    <Input
                      className="form-control-alternative"
                      // defaultValue="email"
                      id="input-email"
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="input-phone">
                      Phone_No
                    </label>
                    <Input
                      className="form-control-alternative"
                      id="input-phone_num"
                      placeholder="phone_num"
                      type="number"
                      name="phone"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default NewCustomer;
