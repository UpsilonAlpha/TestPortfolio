import React from "react"
import "../styles/layout.css"
import {Row, Col, Image} from 'react-bootstrap'
import logo from '../images/Logo.png'
import { Link } from "gatsby"

const leftLinkStyle =
{
  padding: "2rem 0",
  textAlign: "right",
}

const rightLinkStyle =
{
  padding: "2rem 0",
  textAlign: "left",
}

const linkStyles =
{
  color: "#555555",
  textDecoration: "none",
}

const activeLinkStyles =
{
  color: "#55bb55",
  textDecoration: "underline",
}


function Header(leftLinkActive) {
    return(
    <header>
        <Row className="g-0">
            <Col></Col>
            <Col style={leftLinkStyle}>
                <Link style={leftLinkActive ? activeLinkStyles : linkStyles} to="/">Portfolio</Link>
            </Col>
            <Col>
                <p>
                <Image src={logo} width="75rem" fluid/>
                </p>
            </Col>
            <Col style={rightLinkStyle}>
                <Link style={leftLinkActive ? linkStyles : activeLinkStyles} to="/Posts">Blog</Link>
            </Col>
            <Col></Col>
        </Row>
    </header>
    )
}

export default Header