import { div } from "prelude-ls"
import * as React from "react"
import '../global.css'
import logo from '../images/UpsilonAlpha.png'

const pageStyles = 
{
  color: "#CCCCCC",
  background: '#202020',
  padding: "96px",
  paddingBottom: "500px",
  fontFamily: "Consolas",
}

const headerStyles =
{
  textAlign: "center",
  position: "relative",
  marginTop: "50px"
}

const centerText =
{
  textAlign: "center",
  padding: "20px"
}

const centerImage =
{
  justifyContent: "center",
  alignItems: 'center',
  paddingLeft: "45%"
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
  <div style={centerImage}>
    <img src={logo} width="100px" padding="0px"/>
  </div>
  <h1 style={headerStyles}>Hi, I'm Ulban!</h1>
  <h1 style={headerStyles}>I make apps and games for nerds!</h1>
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
