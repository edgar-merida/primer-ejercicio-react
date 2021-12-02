import * as React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Example() {
  return (
    <ButtonGroup aria-label="Basic example">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
    </ButtonGroup>
  )
}

export default Example;
