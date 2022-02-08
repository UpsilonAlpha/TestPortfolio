import * as React from "react"
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col} from 'react-bootstrap'
import Header from "../components/header"
import GifTile from "../components/giftile"

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

const specialText =
{
  color: "#55e575"
}


const IndexPage = () => {
  return (
  <main style={pageStyles} className="text-center">
    <br/>
    {Header(true)}
    <br/>
    <h1>Hi, I'm <span style={specialText}>Ulban Adhikary</span></h1>
    <h1>I make games and apps for learners!</h1><br/>
    <h5>Check out my projects below!</h5><br/><br/><br/><br/><br/>
    <h2>Desktop</h2>
    <Row className="g-0">
      <Col md={6}>
        {GifTile("Streak", streak, streakThumbnail, "A gameshow style quiz app based on flashcards! You can build your own or use premade decks via the API.")}
      </Col>
      <Col md={6}>
        {GifTile("Gridlock", gridlock, gridlockThumbnail, "A modern take on the ancient Chinese board game 'Go' made in C# using WPF's UI system and fill algorithms.")}
      </Col>
    </Row> <br/><br/><br/>
    <h2>Mobile</h2>
    <Row className="g-0">
      <Col md={6}>
        {GifTile("Photogenesis", photogenesis, photogenesisThumbnail, "A project to show why photons take so long to exit the sun using physics-based gameplay.")}
      </Col>
      <Col md={6}>
        {GifTile("Nucleogenesis", nucleogenesis, nucleogenesisThumbnail, "A grid-based puzzle game that teaches you about how elements fuse in the cores of stars." )}
      </Col>
    </Row>
  </main>
  );
}

export default IndexPage
