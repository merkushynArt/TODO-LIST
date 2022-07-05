import React from 'react';
import './formBlock.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const FormBlock = ({tasks, setTasks}) => {
   const addTask = () => {
      setTasks([...tasks, {
         id: uuidv4(),
         title: 'Убрать дома',
         priority: 'hight',
         date: 'jul 19',
         success: false,
         pending: true,
         tags: ['home'],
         description: ''
      }])
   };

   return (
      <>
         <InputGroup className="mb-3">
            <FormControl
               placeholder="Enter new Todo"
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={addTask} >
               Button
            </Button>
         </InputGroup>
      </>
   )
}

export default FormBlock