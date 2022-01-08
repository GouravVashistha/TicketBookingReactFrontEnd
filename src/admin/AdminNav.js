import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
function AdminNav() {
  const admin = "Admin Pannel"
  const navigate = useNavigate();

  var ui = (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/admin/home">{admin}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin/addmovie">Add Movies</Nav.Link>
            <Nav.Link href="/admin/hallcap">Add Hall Capacity</Nav.Link>
            <Nav.Link href="/admin/addshow">Add shows</Nav.Link>
            <Nav.Link href="/admin/addhall">Add Hall</Nav.Link>


          </Nav>
          <Nav>
            <Nav.Link href="#deets">Add More Features</Nav.Link>
            <Nav.Link onClick={() => {
              localStorage.removeItem('email')
              navigate("/admin")
            }}>
              Logout

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );

  var loggedUi = (
    <h1>You have logged out</h1>
  );
  if (localStorage.getItem('email') == null) {
    return loggedUi;
  }

  else {

    return ui;

  }
}
export default AdminNav;
