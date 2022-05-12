import WordHeading from "./WordHeading";
import data from "../data/gallery.json";
import "../style/Gallery.css";

function Gallery() {
    return (
        <div id="gallery" name="gallery">
            <WordHeading word="Gallery"></WordHeading>
            <div className="container-fluid">
                {data.map(function(album) {
                    return (
                        <div>
                            <h1 className="album-title">{album.Title}</h1>
                            {album.Images.map(function(image) {
                                return <img src={image} className="col-lg-4 album-image"></img>
                            })}
                        </div>
                    ) 
                        
                    
                })}
            </div>
        </div>
    )
}

export default Gallery;