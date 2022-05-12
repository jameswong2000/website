import { Card, Badge, Button } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "../style/TimelineBoard.css";

function TimelineBoard ({id, title, data}) {  
    return (
        <Card id={id}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <VerticalTimeline>
                    {data.map(function(project){
                        return (
                            <VerticalTimelineElement  className="vertical-timeline-element" date={project.Year}>
                                <h3 className="vertical-timeline-element-title">{project.Title}</h3>
                                <p className="vertical-timeline-element-subtitle">Type: {project.Type}</p>
                                <div className="vertical-timeline-element-skills-group">
                                    {project.Skills.map(function(skill) {
                                        return <Badge bg="secondary" className="vertical-timeline-element-skills">{skill}</Badge>
                                    })}
                                </div>                               
                                <p className="vertical-timeline-element-detail">{project.Detail}</p>
                                <br/>
                                {project.Link !== "" && <Button className="vertical-timeline-element-button" variant="secondary" href={project.Link} target="_blank">View Source Code</Button>}
                            </VerticalTimelineElement>
                        );
                    })}
                    
                </VerticalTimeline>
            </Card.Body>
        </Card>
    )
}

export default TimelineBoard;