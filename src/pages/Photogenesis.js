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
const Photogenesis = () => {
  return (
    <main style={pageStyles}>
      <div style={centerDiv}>
        <h1>Photogenesis</h1>
        <br/>
        <p>Turning the inside of a star into a one-touch mobile game presented three main challenges:</p>
        <ol>
          <li>Generating the level</li>
          <li>Calculating vectors based on touch input</li>
          <li>Processing various collisions</li>
        </ol>
        <p>This required me to learn about various fascinating <Link style={linkStyles} to="https://bost.ocks.org/mike/algorithms/">sampling algorithms</Link> as well as brush up on linear algebra. I also had to engineer a good looking UI that could scale on all different types of devices.</p>
        <p>To generate an interesting level I needed a sampling algorithm that would spawn in red hexagons which represented protons. For this I had the options of using the basic <Link style={linkStyles} to="https://docs.microsoft.com/en-us/dotnet/api/system.random?view=net-6.0#Operations">System.random</Link> function or implimenting Poisson disk sampling. Unfortunately, both implementations resulted in protons that were far to spread out. As a result I decided on using Perlin noise for my random generation.</p>
        <p>Then I needed a way for users to control the yellow ball which represents a photon. In order to obtain a direction from touch input I needed a specific set of calculations. If the touch moves outside a minimum threshold the vector direction from the inital touch to the current location is recorded. Then the vector is reflected and a line is drawn on-screen to show the player the direction in which they will be firing. Upon release, the photon's speed (which is constant) is changed to align to the given direction.</p>
        <p>Finally I needed a way to ensure the photon always remained visible. This required getting the screen dimensions and reflecting the photon's speed vector in order to stay within the bounds of the screen. Then, all that was left was to program the blue electrons which emit the photon in a random direction when they are hit.</p>
        <p>After completing all this I still had to work on the game aesthetics and UI design which included adding post-processing and sound effects to improve the player experience.</p>
        <p>As a result, this project not only improved my knowledge of sampling algorithms and vector mathematics but also gave me valuable experience on pushing a product to production as well as knowledge of the various challenges associated with it.</p>
      </div>
    </main>
  )
}

export default Photogenesis
