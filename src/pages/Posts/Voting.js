import * as React from "react"
import { Link } from "gatsby"
import { Container, Image } from 'react-bootstrap'
import "../../styles/global.css"
import Voting from "./voting.mdx"

const pageStyles = 
{
  color: "#ddffdd",
  background: '#080808',
  fontFamily: "Consolas",
  height: "100%",
  fontSize: "1.5vw",
  className: "d-flex",
  textAlign: "center",
  lineHeight: "2.5rem",
}

const linkStyles = 
{
  color: "#55e575",
  textDecoration: "none",
}

const centerDiv =
{
  padding: "5rem",
  width: "75%",
  background: '#151515',
  height: "100%",
  display: "inline-block",
  textAlign: "left",
}

// markup
const Post = () => {
  return (
    <main style={pageStyles}>
      <Container style={centerDiv}>
        <Voting/>
      </Container>
    </main>
  )
}

export default Post