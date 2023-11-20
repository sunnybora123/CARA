import React from 'react'
import "./payment_okay.css"

const payment_okay = () => {
  return (
    <div className="success-container">
    <h1>Payment Successful</h1>
    <p className="success-paragraph">
      Thank you for your payment! Your transaction was successful.
    </p>
  </div>
  )
}

export default payment_okay