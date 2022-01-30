import * as React from "react"
import '../styles/global.css'
import logo from '../images/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Row, Col, Image} from 'react-bootstrap'
import {useSpring, animated} from "react-spring"
import { useState } from 'react'
import { Link } from "gatsby"

import photogenesis from '../images/Photogenesis.gif'
import photogenesisThumbnail from '../images/PhotogenesisThumbnail.png'
import nucleogenesis from '../images/Nucleogenesis.gif'
import nucleogenesisThumbnail from '../images/NucleogenesisThumbnail.png'
import gridlock from '../images/Gridlock.gif'
import gridlockThumbnail from '../images/GridlockThumbnail.png'
import streak from '../images/Streak.gif'
import streakThumbnail from '../images/StreakThumbnail.png'

const pageStyles = 
{
  color: "#ddffdd",
  background: '#080808',
  fontFamily: "Consolas",
  padding: "0 2.2rem"
}

const cardStyles = 
{
  color: "#ddffdd",
  background: '#151515',
  fontFamily: "Consolas",
  margin: "3rem 5rem",
  boxShadow: "0.5rem 0.5rem 1rem #000000",
  borderRadius: "3rem"
}

const linkStyles = 
{
  color: "#ddffdd",
  textDecoration: "none",
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
          <Link to={"/"+title} style={linkStyles}>
            <Card.Body>
              <Card.Title><h3><b>{title}</b></h3></Card.Title>
              <Image src={state ? gif : thumbnail} width="400rem" fluid/>
              <br/><br/>
              <p>{description}</p>
            </Card.Body>
          </Link>
        </Card>
      </animated.div>
  )
}


const IndexPage = () => {
  return (
  <main style={pageStyles} className="text-center">
    <br/>
    <p>
      <Image src={logo} width="75rem" fluid/>
    </p>
    <h1>Hi, I'm <span style={specialText}>Ulban Adhikary</span></h1>
    <h1>I make games and apps for learners!</h1><br/>
    <h5>Check out my projects below!</h5><br/><br/><br/><br/><br/>
    <h2>Desktop</h2>
    <Row className="g-0">
      <Col md={6}>
        {GifTile("Streak", streak, streakThumbnail, "I created a way to use flashcards for group study by designing a gameshow style quiz app! You can build your own or use premade decks.")}
      </Col>
      <Col md={6}>
        {GifTile("Gridlock", gridlock, gridlockThumbnail, "A modern take on the ancient Chinese board game 'Goban' made in C# using WPF. I made this to be able to play it with friends.")}
      </Col>
    </Row> <br/><br/><br/>
    <h2>Mobile</h2>
    <Row className="g-0">
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
