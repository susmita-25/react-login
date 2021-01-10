import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useState } from "react";
import {useHistory} from 'react-router-dom';

function App() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    }else{
      localStorage.setItem("username",event.currentTarget[0].value.trim());
      history.push('/home');
    }
  };

  return (
    <ReactBootstrap.Container className="container">

      <ReactBootstrap.Row>
        <ReactBootstrap.Col lg></ReactBootstrap.Col>
        <ReactBootstrap.Col lg>
          <ReactBootstrap.Form validated={validated} noValidate className="login-form" onSubmit={handleSubmit}>
            <div className="login-header-name" >
              <img src="login.png"></img>
              <hr></hr>
            </div>
            <ReactBootstrap.Form.Group controlId="validationCustom01">
              <ReactBootstrap.Form.Label>Username</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control type="text" required placeholder="Enter Username" />
              <ReactBootstrap.Form.Control.Feedback type="invalid">
                Username required
            </ReactBootstrap.Form.Control.Feedback>
            </ReactBootstrap.Form.Group>

            <ReactBootstrap.Form.Group controlId="validationCustom02">
              <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control type="password" required placeholder="Password" />
              <ReactBootstrap.Form.Control.Feedback type="invalid">
                Password required
            </ReactBootstrap.Form.Control.Feedback>
            </ReactBootstrap.Form.Group>
            <hr className="hr"></hr>
            <ReactBootstrap.Button variant="primary" type="submit" >
              Login
  </ReactBootstrap.Button>
          </ReactBootstrap.Form>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col lg></ReactBootstrap.Col>
      </ReactBootstrap.Row>
    </ReactBootstrap.Container>
  );
}

export default App;
