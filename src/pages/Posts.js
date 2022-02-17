import * as React from "react"
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col} from 'react-bootstrap'
import Header from "../components/header"
import PostTile from "../components/post"

import haeckelThumbnail from "../images/BlogPosts/HaeckelThumbnail.jpg"
import osgovThumbnail from "../images/BlogPosts/OSGovThumbnail.jpg"
import votingThumbnail from "../images/BlogPosts/VotingThumbnail.jpg"
import complexityThumbnail from "../images/BlogPosts/ComplexityThumbnail.jpg"

const pageStyles = 
{
  color: "#ddffdd",
  background: '#080808',
  fontFamily: "Consolas",
  padding: "0 2.2rem"
}

const specialText =
{
  color: "#55e575"
}


const BlogPage = () => {
  return (
  <main style={pageStyles} className="text-center">
    <br/>
    {Header(false)}
    <br/>
    <h1>Blog Posts</h1>
    <Row className="g-0">
      <Col md={6}>
        {PostTile("Why we're destroying alien technology", haeckelThumbnail, "Human ignorance is costing us more than we think.", "AlienTech1")}
      </Col>
      <Col md={6}>
        {PostTile("Complexity theory", complexityThumbnail, "Why are all of our ethical systems based on humans?", "Complexity1")}
      </Col>
      <Col md={6}>
        {PostTile("Voting with your money", votingThumbnail, "How to increase personal agency in social projects.", "Voting1")}
      </Col>
      <Col md={6}>
        {PostTile("Open Source Government", osgovThumbnail, "How to shift to direct democracy in the digital age.", "OSGov1")}
      </Col>
    </Row>
  </main>
  );
}

export default BlogPage
