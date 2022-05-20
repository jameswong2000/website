import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact, faJava, faGitAlt, faDocker, faLinux } from '@fortawesome/free-brands-svg-icons'
import { Card } from 'react-bootstrap';
import "../style/SkillsBoard.css";

function SkillsBoard ({id, title}) {
    return (
        <Card id={id}>
            <Card.Header>{title}</Card.Header>
            <Card.Body className="icons">
                <FontAwesomeIcon icon={faHtml5} className="col-4 icon-html" data-bs-toggle="tooltip" data-bs-placement="top" title="HTML 5"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCss3Alt} className="col-4 icon-css" data-bs-toggle="tooltip" data-bs-placement="top" title="CSS 3"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faJs} className="col-4 icon-js" data-bs-toggle="tooltip" data-bs-placement="top" title="Javascript"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faBootstrap} className="col-4 icon-bootstrap" data-bs-toggle="tooltip" data-bs-placement="top" title="Bootstrap"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faReact} className="col-4 icon-react" data-bs-toggle="tooltip" data-bs-placement="top" title="React"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faJava} className="col-4 icon-java" data-bs-toggle="tooltip" data-bs-placement="top" title="Java"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGitAlt} className="col-4 icon-git" data-bs-toggle="tooltip" data-bs-placement="top" title="Git"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faDocker} className="col-4 icon-docker" data-bs-toggle="tooltip" data-bs-placement="top" title="Docker"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinux} className="col-4 icon-linux" data-bs-toggle="tooltip" data-bs-placement="top" title="Linux"></FontAwesomeIcon>
            </Card.Body>
        </Card>
        
    )
}

export default SkillsBoard;