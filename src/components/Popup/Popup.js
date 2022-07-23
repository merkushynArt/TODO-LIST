import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { AiFillTag } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';


const MyVerticallyCenteredModal = (props) => {
   const {check, setCheck, modalShowObj, tasks, setTasks} = props;

   let priority = ['Hight', 'Medium', 'Low', 'None'];

   const saveChangesHandler = (id) => {
      setTasks(tasks.map((item) => {
         if(id === item.id) {
            return{...item, priority: check}
         }
         return item
      }))
      props.onHide()
   };

   return (
      <Modal
         {...props}
         size="md"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Task Details
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <h4>{modalShowObj.title}</h4>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
               <Button style={{width: '45%'}} variant="outline-primary">!!!Priority</Button>
               <Button style={{width: '45%'}} variant="outline-primary"><AiFillTag/> Tags</Button>
            </div>
            <div>
               {
                  priority.map((item) => (
                     <Form.Check type='radio' id={`check-api-${item}`}>
                        <Form.Check.Input style={{borderColor: 'blue'}} checked={item === check} onChange={() => setCheck(item)} name='priority' type='radio' isValid />
                        <Form.Check.Label style={{textAlign: 'center'}}>
                           <span style={{color: item === 'Hight' ? 'red' : item === 'Medium' ? 'yellow' : item === 'Low' ? 'blue' : 'black',
                           width: '30px',
                           display: 'inline-block',
                           fontWeight: 'bold'
                        }}>
                              {`${item === 'Hight' || item === 'None' ? '!!!' : item === 'Medium' ? '!!' : '!'}`}
                           </span>
                           {`${item} priority`}
                        </Form.Check.Label>
                     </Form.Check>
                  ))
               }
            </div>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
            <Button variant="outline-primary" onClick={() => saveChangesHandler(modalShowObj.id)}>Save changes</Button>
         </Modal.Footer>
      </Modal>
   );
}

export default MyVerticallyCenteredModal;