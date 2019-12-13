import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

const CalendarModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onChangeDate = (e) => {
      // moment(e).unix();
      // console.log(moment(e).unix());
      props.onChangeDate(moment(e).unix());
    }
    return (
      <>
        <Button variant="link" onClick={handleShow} type="button" className="btn btn-link">
            Schedule Campaign
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Datetime 
              closeOnSelect = {true}
              onChange={onChangeDate}
             />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default CalendarModal;