import * as React from "react"
import { Link } from "gatsby"

const pageStyles = 
{
  color: "#ddffdd",
  background: '#080808',
  fontFamily: "Consolas",
  height: "100rem",
}

const linkStyles = 
{
  color: "#55e575",
  textDecoration: "none",
}

const centerDiv =
{
  margin: "0 20rem",
  padding: "5rem 5rem",
  background: '#151515',
  height: "100%",
}

// markup
const Gridlock = () => {
  return (
    <main style={pageStyles}>
      <div style={centerDiv}>
        <h1>Gridlock</h1>
        <br/>
        <p>This project really deepened my programming knowledge.</p>
        <p>When I first came across the ancient Chinese board game 'Goban', I thought it was extremely simple compared to other games such as chess. However there weren't any options if I wanted to play with a friend so I decided to program my own.</p>
        <p>However this game is far more complicated than it looks. Unlike chess there is a near infite number of ways to capture enemy pieces. Also, there aren't any online tutorials like there are for chess.</p>
        <p>As a result I was on my own when starting to program this game. That was until I discovered an article on the floodfill algorithm. This algorithm had a few uses in image processing, but I decided to adapt it for the game.</p>
        <p>Pieces are captured when they are fully encircled by enemy pieces, however there were many literal edge cases. It took me long hours at the keyboard to discover a way to adapt the algorithm so it would work at the corners of the board.</p>
        <p>After finally making a functioning CLI prototype I then migrated my code to create a native Windows application with a far more compelling UI. Finally! I could play against friends and share the app with others.</p>
        <p>Making this app taught me perseverance in the face of complex technical issues, as well as the importance of prototypes! This knowledge would be vital when it came to developing my first mobile game Nucleogenesis.</p>
      </div>
    </main>
  )
}

export default Gridlock