import React from 'react';
import './statusBlock.css';
import { Button } from "react-bootstrap";

const StatusBlock = ({tasks}) => {
   return (
      <div className='buttons'>
         <Button variant="primary">Total: {tasks.length}</Button>
         <Button variant="success">Success: {tasks.filter((item) => item.success).length}</Button>
         <Button variant="warning">Pending: {tasks.filter((item) => item.pending).length}</Button>
      </div>
   )
}

export default StatusBlock