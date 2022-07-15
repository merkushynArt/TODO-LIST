import React from 'react';
import './statusBlock.css';
import { Button } from "react-bootstrap";

const StatusBlock = ({tasks, setStatus}) => {
   return (
      <div className='buttons'>
         <Button variant="primary" onClick={() => setStatus('Total')} >Total: {tasks.length}</Button>
         <Button variant="success" onClick={() => setStatus('Success')} >Success: {tasks.filter((item) => item.success).length}</Button>
         <Button variant="warning" onClick={() => setStatus('Pending')} >Pending: {tasks.filter((item) => item.pending).length}</Button>
      </div>
   )
}

export default StatusBlock