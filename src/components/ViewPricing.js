import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

import Price from '../images/Price.png';
import AutoChess from '../images/AutoChess.png';

const ViewPricing = (props) => {
    const {price, name, region} = props;
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <img src={Price} alt="price logo"/>
        <Button variant="link" onClick={handleShow}>
            View Pricing
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Title></Modal.Title>
          <Modal.Body>
            <div className="row">
              <div className="col-6 img-text-div">
                <img src={AutoChess} alt="campaign logo"/>
              </div>
              <div className="col-6 modal-heading-content">
                <div>{name}</div>
                <div className="campaign-text-region">{region}</div>
              </div>
            </div>
            <div className="row modal-heading-text">
              <h4>Pricing</h4>
            </div>
            <div className="row">
              <div className="col-6 div-week-text">1 Week - 1 Month</div>
              <div className="col-6 div-week-value">${price}</div>
            </div>
            <div className="row">
              <div className="col-6 div-week-text">6 Months</div>
              <div className="col-6 div-week-value">${price * 5}</div>
            </div>
            <div className="row">
              <div className="col-6 div-week-text">1 Year</div>
              <div className="col-6 div-week-value">${price * 12}</div>
            </div>
            <div class="col-12 text-center">
              <Button className="view-pricing-modal-btn" onClick={handleClose}>Close</Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default ViewPricing;