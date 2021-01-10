import './home.component.css';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Users from '../../services/user.api';

function HomeComponent(){
  const username=localStorage.getItem("username");
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = () => {
    history.push("/");
  }
    return (

  <ReactBootstrap.Container fluid >
    <ReactBootstrap.Navbar bg="dark" className="justify-content-end">
    <ReactBootstrap.Nav.Item>
    <h3>Welcome {username} !</h3>
    </ReactBootstrap.Nav.Item>
    <ReactBootstrap.Nav.Item>
      <ReactBootstrap.Nav.Link onClick={handleShow}>Logout</ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav.Item>
  </ReactBootstrap.Navbar>
<div className="row">
  <Users></Users>
</div>


<ReactBootstrap.Modal show={show} onHide={handleClose} backdrop="static">
        <ReactBootstrap.Modal.Header closeButton>
          <ReactBootstrap.Modal.Title>Logout</ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>Are you sure you want to log out?</ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button variant="secondary" onClick={handleClose}>
            Close
          </ReactBootstrap.Button>
          <ReactBootstrap.Button variant="primary" onClick={logout}>
            Logout
          </ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>
  </ReactBootstrap.Container>


  
    );
}
export default HomeComponent;