import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";

function AdminNav() {
  const admin = "Admin Pannel"
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{admin}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Add Movies</Nav.Link>
            <Nav.Link href="#pricing">See Movies List</Nav.Link>
            <Nav.Link href="#pricing">Add Hall</Nav.Link>


          </Nav>
          <Nav>
            <Nav.Link href="#deets">Add More Features</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
export default AdminNav;
