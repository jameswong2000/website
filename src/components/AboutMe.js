import WordHeading from "./WordHeading";
import data from "../data/aboutMe.json";
import "../style/AboutMe.css";
import {Card} from 'react-bootstrap';

function AboutMe() {
    return (
        <div id="about-me" name="about-me">
            <WordHeading word="About Me"></WordHeading>
            <div id="about-me-content" className="container-fluid row">
                {data.map(function(content) {
                    return (
                        <Card className="col-lg-4">
                            <Card.Img variant="top" src={content.Image} />
                            <Card.Body>
                                <Card.Title>{content.Title}</Card.Title>
                                <Card.Text>{content.Content}</Card.Text>
                            </Card.Body>
                        </Card>
                    )   
                })}
            </div>
            
        </div>
    )
}

export default AboutMe;