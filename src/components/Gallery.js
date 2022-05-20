import WordHeading from "./WordHeading";
import data from "../data/gallery.json";
import "../style/Gallery.css";
import {Accordion} from 'react-bootstrap';

function Gallery() {
    return (
        <div id="gallery" name="gallery">
            <WordHeading word="Gallery"></WordHeading>
            <div className="container-fluid">
                {data.map(function(album) {
                    return (
                        <Accordion className="album">
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>{album.Title}</Accordion.Header>
                                <Accordion.Body>
                                    {album.Images.map(function(image) {
                                        return <img src={image.Link} alt={image.Alt} className="col-lg-4 album-image" data-bs-toggle="tooltip" data-bs-placement="top" title={image.Alt}></img>
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )   
                })}
            </div>
        </div>
    )
}

export default Gallery;