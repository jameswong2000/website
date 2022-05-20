import { Card, Table } from 'react-bootstrap';
import "../style/TabularBoard.css";

function TabularBoard ({id, title, data}) {
    return (
        <Card id={id}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map(function(key){
                                return <th>{key}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                            {data.map(function(record){
                                if(id === "educations-board") {
                                    return <tr>
                                                <td>{record.Year}</td>
                                                <td>{record.Institute}</td>
                                                <td>{record.Detail}</td>
                                            </tr>;
                                }
                                else if(id === "working-board") {
                                    return <tr>
                                                <td>{record.Year}</td>
                                                <td>{record.Company}</td>
                                                <td>{record.Title}</td>
                                            </tr>;
                                }
                                else {
                                    return "";
                                }
                                
                            })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default TabularBoard;