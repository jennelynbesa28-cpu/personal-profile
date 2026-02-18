import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function Skills() {
  return (
    <Card className='p-4 shadow'>
      <h1 className='mb-3'>My Skills</h1>

      <ListGroup variant='flush'>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React.js</ListGroup.Item>
        <ListGroup.Item>HTML5</ListGroup.Item>
        <ListGroup.Item>CSS3</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Skills;
