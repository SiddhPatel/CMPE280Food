import React from "react";
import PropTypes from "prop-types";
import NavBar from 'react-bootstrap/navBar';
import Nav from 'react-bootstrap/nav';
import Container from 'react-bootstrap/Container'
import { useNavigate } from "react-router-dom";

Navigation.propTypes = {};

function Navigation(props) {

  const navigate = useNavigate();

  const redirectToImport = () => {
    navigate("/import")
  };

  
  const redirectToHome = () => {
      navigate("/home")
  };

   
  const redirectToPredict = () => {
    navigate("/predict")
};

  return (
    <div>
      <NavBar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{redirectToHome()}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{redirectToImport()}}>Import</Nav.Link>
            <Nav.Link onClick={()=>{redirectToPredict()}}>Predict</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
}

export default Navigation;
