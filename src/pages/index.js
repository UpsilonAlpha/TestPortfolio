import * as React from "react"
import '../styles/global.css'
import logo from '../images/Logo.png'
import photogenesis from '../images/Photogenesis.gif'
import photogenesisThumbnail from '../images/PhotogenesisThumbnail.png'
import nucleogenesis from '../images/Nucleogenesis.gif'
import nucleogenesisThumbnail from '../images/NucleogenesisThumbnail.png'
import gridlock from '../images/Gridlock.gif'
import gridlockThumbnail from '../images/GridlockThumbnail.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Row, Col, Image} from 'react-bootstrap'
import {useSpring, animated} from "react-spring"
import { useState } from 'react'

const pageStyles = 
{
  color: "#ddffdd",
  background: '#191515',
  fontFamily: "Consolas",
}

const cardStyles = 
{
  color: "#ddffdd",
  background: '#252020',
  fontFamily: "Consolas",
  margin: "5rem",
}

const specialText =
{
  color: "#55e575"
}

function GifTile(title, gif, thumbnail, description) {
  const [state, toggle] = useState(false);
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 100 } })
  return (
      <animated.div
        style={{
          transform: x
            .interpolate({
              range: [0, 1],
              output: [1, 1.1]
            })
            .interpolate(x => `scale(${x})`)
        }}
      >
        <Card style={cardStyles} onMouseOver={() => toggle(true)} onMouseLeave={() => toggle(false)}>
          <Card.Body>
            <Card.Title><h3><b>{title}</b></h3></Card.Title>
            <Image src={state ? gif : thumbnail} width="400rem" fluid/>
            <br/><br/>
            <p>{description}</p>
          </Card.Body>
        </Card>
      </animated.div>
  )
}

/*const Expand = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return props;
}*/

// markup

const IndexPage = () => {
  return (
  <main style={pageStyles} className="text-center">
    <br/>
    <p>
      <Image src={logo} width="75rem" fluid/>
    </p>
    <h1>Hi, I'm <span style={specialText}>Ulban Adhikary</span></h1>
    <h1>I make games and apps for learners!</h1><br/>
    <p>Have a look at my projects!</p><br/><br/>
    <Row className="g-0">
    <Col md={6}>
        {GifTile("Gridlock", gridlock, gridlockThumbnail, "A modern take on the ancient Chinese board game 'Goban' made in C# using WPF. I first made this as a local app as there weren't online versions to play with friends.")}
      </Col>
      <Col md={6}>
        {GifTile("Photogenesis", photogenesis, photogenesisThumbnail, "A physics based game that teaches you about physics! My goal with this project was to show why photons take so long to exit the sun.")}
      </Col>
      <Col md={6}>
        {GifTile("Nucleogenesis", nucleogenesis, nucleogenesisThumbnail, "A puzzle game that teaches you about how elements fuse in the core of stars. This project shows how hydrogen and helium became all the elements we see today." )}
      </Col>
    </Row>
  </main>
  );
}

export default IndexPage
