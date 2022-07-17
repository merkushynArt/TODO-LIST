import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const MyVerticallyCenteredModal = (props) => {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Task Details
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <h4>{props.obj.title}</h4>
            <p>
               Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
               dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
               consectetur ac, vestibulum at eros.
            </p>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
         </Modal.Footer>
      </Modal>
   );
}

export default MyVerticallyCenteredModal;