import { div } from "prelude-ls"
import * as React from "react"
import '../styles/global.css'
import logo from '../images/Logo.png'

const pageStyles = 
{
  color: "#ddffdd",
  background: '#191515',
  fontFamily: "Consolas",
}

const headerStyles =
{
  textAlign: "center",
  position: "relative",
  marginTop: "2rem"
}

const centerText =
{
  textAlign: "center",
  padding: "1rem"
}

const specialText =
{
  color: "#55e575"
}

const centerImage =
{
  justifyContent: "center",
  marginLeft: "43.5rem",
  paddingTop: "1.25rem"
}
// markup
class GifTile extends React.Component
{
  render() {
    return (
      <div>
        <img src={logo}/>
      </div>
    );
  }
}
const IndexPage = () => {
  return (
<main style={pageStyles}>
  <div style={centerImage} marginTop="auto">
    <img src={logo} width="75px"/>
  </div>
  <h1 style={headerStyles}>Hi, I'm <span style={specialText}>Ulban Adhikary</span></h1>
  <h1 style={headerStyles}>I make games and apps for nerds!</h1>
  <p style={centerText}>Have a look at my projects!</p>
  <GifTile/>
  <GifTile/>
  <GifTile/>
  <GifTile/>
  <GifTile/>
  <GifTile/>
</main>
  );
}

export default IndexPage
