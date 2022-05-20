import "../style/Home.css";
import WordHeading from "./WordHeading";
import data from "../data/aboutMe.json";


function Home() {
    return (
        <div id="home" name="home">
            <WordHeading word="James Wong"></WordHeading>
            <div className="row justify-content-center" id="photos">
                {data.map(function(content) {
                    return (
                        <div className="col-lg-4">
                            <img src={content.Image} alt={content.Alt}/>
                            <h2 className="caption">{content.Title}</h2>
                        </div>
                    )   
                })}
            </div>        
        </div>
    )
}

export default Home;