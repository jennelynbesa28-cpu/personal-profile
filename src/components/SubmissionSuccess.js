import React from "react";
import { Card } from "react-bootstrap";

function SubmissionSuccess({ data }) {
  return (
    <Card className='p-4 shadow bg-light'>
      <h2>Thank you, {data.name}!</h2>
      <p>Your message has been sent successfully.</p>

      <h5>Submitted Information:</h5>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Message:</strong> {data.message}
      </p>
    </Card>
  );
}

export default SubmissionSuccess;
