import * as React from "react"
import { Link } from "gatsby"
import { Container, Image } from 'react-bootstrap'
import streak from '../images/Streak.gif'
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
const Streak = () => {
  return (
    <main style={pageStyles}>
      <Container style={centerDiv}>
        <h1>Streak</h1>
        <br/><br/>
        <p>I never thought building a fun gameshow style app would teach me so much.</p><br/>
        <p>This is because I didn't want to make <em>just</em> another quiz app. I wanted users to be able to use decks they had already made for regular study! That's why I decided to integrate my app with the online flashcard builder <Link style={linkStyles} to="https://quizlet.com/latest">Quizlet</Link>. In order to do this I had to learn three key concepts:</p><br/>
        <ol>
            <li>Make API calls to gather data</li>
            <li>Read and write to JSON files</li>
            <li>Create a gameshow-esque buzzer system</li>
        </ol><br/>
        <p>Me and a few other classmates used Quizlet to store flashcards. There's an inherent suspense when using humble learning device which makes it perfect for gamification. As a result I did research to find a quizlet API that allowed me to request decks of flashcards in JSON format.</p><br/>
        <p>I then added functionality to save the flashcard deck to one's computer, allowing users to play offline. Then, when playing I read from the JSON file in order to display questions on screen. Players then had to press a 'buzzer' key to be allowed to answer the question.</p><br/>
        <Container className="d-flex justify-content-center">
          <Image src={streak} width="75%" alt='demonstration of buzzer functionality'/>
        </Container><br/><br/>
        <p>In order to increase the stakes I also made the text scroll across the screen to emulate a gameshow host reading the question out. I also added a timer after each buzzer press in order to answer the question</p><br/>
        <p>This project was fundamental for teaching me how to use APIs and JSON in combination with a native app that can read/write to files. I essentially learned all the skills required to make a fully featured desktop application. This foundation helped me a lot with other projects that involved API use.</p>
      </Container>
    </main>
  )
}

export default Streak
