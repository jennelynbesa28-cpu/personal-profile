import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import SubmissionSuccess from "./SubmissionSuccess";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <SubmissionSuccess data={formData} />;
  }

  return (
    <Card className='p-4 shadow'>
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='message'
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default Contact;
