import React from 'react';
import './statusBlock.css';
import { Button } from "react-bootstrap";

const StatusBlock = () => {
   return (
      <div className='buttons'>
         <Button variant="primary">Total: 5</Button>
         <Button variant="success">Success: 2</Button>
         <Button variant="warning">Pending: 3</Button>
      </div>
   )
}

export default StatusBlock