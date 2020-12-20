import React, { useState } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import DoctorLoginPage from "./components/doctorloginpage";
import MainPage from "./components/mainpage";
import DoctorRegisterPage from "./components/doctorregisterpage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='App'>
      <Navbar color='light' light expand='md'>
        <div className='container'>
          <NavbarBrand href='/'>DiogonizeMe</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/login'>LogIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/register'>Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/login' exact component={DoctorLoginPage} />
          <Route path='/register' component={DoctorRegisterPage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
