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
const Streak = () => {
  return (
    <main style={pageStyles}>
      <div style={centerDiv}>
        <h1>Streak</h1>
        <br/>
        <p>I never thought building this application would teach me so much.</p>
        <p>This is because I not only decided to make a competetive quiz app, but I also didn't want to have to make each deck of questions by hand. That's why I decided to integrate my app with the online flashcard builder Quizlet. In order to do this I had to learn three key concepts:</p>
        <ol>
            <li>Make API calls to gather data</li>
            <li>Read and write to JSON files</li>
            <li>Create a gameshow-esque buzzer system</li>
        </ol>
        <p>Me and a few other classmates used the online service Quizlet to store flashcards. However in group revision sessions I found that there was almost a gameshow aspect to this humble learning device. As a result I did research to find a quizlet API that allowed me to request decks of flashcards in JSON format.</p>
        <p>I then added functionality to save the flashcard deck to one's own computer, allowing people to play offline. Then, when playing I read from the JSON file in order to display questions on screen. Players then had to press a 'buzzer' key to be allowed to answer the question.</p>
        <p>In order to increase the stakes I also made the text scroll across the screen to emulate a gameshow host reading the question out. I also added a timer after each buzzer press in order to answer the question</p>
        <p>This project was fundamental for teaching me how to use APIs and JSON in combination with a native app that can read/write to files. I essentially learned all the skills required to make a fully featured desktop application. This foundation helped me a lot with other projects such as making a discord bot.</p>
      </div>
    </main>
  )
}

export default Streak
