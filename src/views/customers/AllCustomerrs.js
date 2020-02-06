import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import {
  Table,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button
} from "reactstrap";

import Header from "components/Headers/Header.jsx";
const AllCustomers = props => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <div className="float-right">
              <Link to="customers/new">
                <Button color="black" size="sm">
                  New Customer
                </Button>
              </Link>
            </div>
            <h3 className="mb-0">CUSTOMERS</h3>
          </CardHeader>
          <CardBody>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone-No</th>
                </tr>
              </thead>
              <tbody>
                {props.customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default AllCustomers;
