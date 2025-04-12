import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} className="text-center">
            <div className="social-icon mb-2">
              <a href="https://www.linkedin.com/in/kritika-dhiman-a23104290/"><img src={navIcon1} alt="Icon" /></a>
              
            </div>
            <p>&copy; 2025 Kritika Dhiman. All rights reserved.</p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
