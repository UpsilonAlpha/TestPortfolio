import * as React from "react"
import { Link } from "gatsby"
import { Container } from 'react-bootstrap'
import "../styles/global.css"

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
const Nucleogenesis = () => {
  return (
    <main style={pageStyles}>
      <Container style={centerDiv}>
        <h1>Nucleogenesis</h1>
        <br/><br/>
        <p>Building my first mobile app was a stressful but exciting journey!</p><br/>
        <p>The game uses swipes as input to merge elements, similar to how elements fuse in stars. I had this idea when the game 2048 started to skyrocket in popularity, however instead of using numbers I decided to put a more educational twist on the main mechanic.</p><br/>
        <p>The core logic of the game followed a simple algorithm. After each swipe the game went through each element in a 2D matrix using nested for loops, and checked the elements around it. The element had three options: fall, stop or merge. Once every element chose 'stop' then the event was over and the game listened for the next swipe.</p><br/>

        <p>In order to get the game to run smoothly I needed to seperate the logic from the animatons at the front-end. This required me to use asynchronous functions which awaited results from the algorithm in order to play the animation.</p><br/>
        <p>The game was based around a simple state machine that cycled through three states: falling, swiping and waiting. This prevented bugs that would arise from the user accidentally swiping the screen during an animation.</p><br/>
        <p>Finally I designed a UI with custom art and an unlockable system which rewarded players for progressing in the game while simultaneously educating them about stars!</p><br/>

        <p>This was one of my most valuable projects as it taught me so much about developing an app to production. I realized that while getting the basics of a game down was difficult, the majority of the time spent would be in the later stages, finding bugs and improving user experience.</p><br/>
        <p>However the success of this game led me to develop a second one! <Link style={linkStyles} to="/Photogenesis">Photogenesis</Link>.</p>
      </Container>
    </main>
  )
}

export default Nucleogenesis
