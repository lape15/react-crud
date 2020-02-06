import React, { useState, useEffect } from "react";
import AllCustomers from "./AllCustomerrs";
import NewCustomer from "./NewCustomer";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

const Customers = props => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/customers")
      .then(response => {
        //   console.log(response.data);
        setCustomers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addCustomer = ({ firstName, lastName, email, phone }) => {
    let customerData = customers;
    console.log(customerData);
    axios
      .post("http://localhost:3000/customers", {
        firstName,
        lastName,
        email,
        phone
      })
      .then(response => {
        // console.log(response.data);
        let id = response.data.id;
        // console.log(id); checking to see if id logs
        customerData.push(id);
        setCustomers(customerData);
      });
  };

  const { match } = props;
  //   console.log(match);
  return (
    <>
      <Switch>
        <Route
          exact={true}
          path={match.url}
          component={() => <AllCustomers customers={customers} />}

          //   render={props => <AllCustomers {...props} />
          // }
        />
        <Route
          exact={true}
          path={`${match.url}/new`}
          render={props => <NewCustomer {...props} addCustomer={addCustomer} />}
        />
      </Switch>
    </>
  );
};

export default Customers;
