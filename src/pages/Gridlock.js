import * as React from "react"
import { Link } from "gatsby"
import { Container, Image } from 'react-bootstrap'
import "../styles/global.css"
import govschess from "../images/GovsChess.png"

const pageStyles = 
{
  color: "#ddffdd",
  background: '#080808',
  fontFamily: "Consolas",
  height: "100%",
  fontSize: "1.5vw",
  className: "d-flex",
  textAlign: "center",
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
const Gridlock = () => {
  return (
    <main style={pageStyles}>
      <Container style={centerDiv}>
        <h1>Gridlock</h1>
        <br/><br/>
        <p>When I first came across the ancient Chinese board game '<Link style={linkStyles} to="https://www.britgo.org/intro/intro2.html">Go</Link>', I thought it was extremely simple compared to other games such as chess. However there didn't seem to be any local multiplayer options online so I decided to make my own.</p><br/>
        <p>However, as shown by the <Link style={linkStyles} to="https://deepmind.com/research/case-studies/alphago-the-story-so-far">AlphaGo</Link> project, this game is far more complicated than it looks. Unlike chess there is a near infite number of ways to capture enemy pieces. Also, there weren't any online tutorials like were for chess.</p><br/>
        <Container className="d-flex justify-content-center">
          <Image src={govschess} width="75%" alt='Complexity difference between Go and Chess'/>
        </Container><br/><br/>
        <p>So I was on my own when starting to program this game. That was until I discovered an article on the <Link style={linkStyles} to="https://www.hackerearth.com/practice/algorithms/graphs/flood-fill-algorithm/tutorial/">floodfill algorithm</Link>. This algorithm is normally used in image processing and pathfinding but I decided to adapt it for the game.</p><br/>
        <p>Pieces are captured when they are fully encircled by enemy pieces. However despite this simple premise, there were many literal edge cases. It took me long hours at the keyboard to discover a way to adapt the algorithm so it would work on the sides of the board.</p><br/>
        <p>After finally completing a functioning text-based command line prototype, I decided to migrate my code and create a native Windows application with a far more compelling UI. Finally! I could play against friends and share the app with others.</p><br/>
        <p>Making this app taught me perseverance in the face of complex technical issues, as well as the importance of prototypes! This knowledge would be vital when it came to developing my first mobile game <Link style={linkStyles} to="/Nucleogenesis">Nucleogenesis</Link>.</p>
      </Container>
    </main>
  )
}

export default Gridlock