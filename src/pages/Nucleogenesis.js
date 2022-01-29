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
const Nucleogenesis = () => {
  return (
    <main style={pageStyles}>
      <div style={centerDiv}>
        <h1>Nucleogenesis</h1>
        <br/>
        <p>Building my first mobile app was a stressful but exciting journey!</p>
        <p>The game uses swipes as input to merge elements, similar to how elements fuse in stars. I had this idea when the game 2048 started to skyrocket in popularity, however instead of using numbers I decided to put a more educational twist on the main mechanic.</p>
        <p>The core logic of the game followed a simple algorithm. After each swipe the game went through each element in a 2D matrix using nested for loops, and checked the elements around it. The element had three options: fall, stop or merge. Once every element chose 'stop' then the event was over and the game listened for the next swipe.</p>
        <p>In order to get the game to run smoothly I needed to seperate the logic from the animatons at the front-end. This required me to use asynchronous functions which awaited results from the algorithm in order to play the animation.</p>
        <p>The game was based around a simple state machine that cycled through three states: falling, swiping and waiting. This prevented bugs that would arise from the user accidentally swiping the screen during an animation.</p>
        <p>Finally I designed a UI with custom art and an unlockable system which rewarded players for progressing in the game while simultaneously educating them about stars!</p>
        <p>This was one of my most valuable projects as it taught me so much about developing an app to production. I realized that while getting the basics of a game down was difficult, the majority of the time spent would be in the later stages, finding bugs and improving user experience.</p>
        <p>However the success of this game led me to develop a second one! <Link style={linkStyles} to="/Photogenesis">Photogenesis</Link>.</p>
      </div>
    </main>
  )
}

export default Nucleogenesis
