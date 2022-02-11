import React from "react"
import {Card, Image} from 'react-bootstrap'
import {useSpring, animated} from "react-spring"
import { useState } from 'react'
import { Link } from "gatsby"

const cardStyles = 
{
  color: "#ddffdd",
  background: '#151515',
  fontFamily: "Consolas",
  margin: "3rem 5rem",
  boxShadow: "0.5rem 0.5rem 1rem #000000",
  borderRadius: "3rem"
}

const tileStyles = 
{
  color: "#ddffdd",
  textDecoration: "none",
}

function PostTile(title, thumbnail, description, link) {
    const [state, toggle] = useState(false);
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 100 } })
    return (
        <animated.div
            style={{
            transform: x
                .interpolate({
                range: [0, 1],
                output: [1, 1.1]
                })
                .interpolate(x => `scale(${x})`)
            }}
        >
            <Card style={cardStyles} onMouseOver={() => toggle(true)} onMouseLeave={() => toggle(false)}>
            <Link to={"../Posts/"+link} style={tileStyles}>
                <Card.Body>
                <Card.Title><h3><b>{title}</b></h3></Card.Title>
                <Image src={thumbnail} width="400rem" fluid="true"/>
                <br/><br/>
                <p>{description}</p>
                </Card.Body>
            </Link>
            </Card>
        </animated.div>
    )
}

export default PostTile