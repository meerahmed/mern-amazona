import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen() {
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Place Order</title>
        </Helmet>
        <h1 className="my-3">Place Order</h1>
      </div>
    </div>
  );
}
