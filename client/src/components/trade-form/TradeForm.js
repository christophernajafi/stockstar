import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";

import "./trade-form.css";

const TradeForm = props => {
  const [formState, setFormState] = useState({
    type: "",
    quantity: null,
    stockSymbol: "",
    price: null
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.history.push("/portfolio");
    console.log("formState: ", formState);
  };

  return (
    <Fragment>
      <div>
        Cash Balance: $
        <br />
        {/* <button className="btn btn-primary">Buy</button> */}
        <Button>Buy</Button>
      </div>
    </Fragment>
  );
};

export default TradeForm;
