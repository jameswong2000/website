import '../style/Home.css';
import WordHeading from "./WordHeading";
import Computer from "../images/computer.jpg";
import Music from "../images/music.jpg";
import Airplane from "../images/airplane.jpg";

function Home() {
    return (
        <div id="home" name="home">
            <WordHeading word="James Wong"></WordHeading>
            <div className="row justify-content-center" id="photos">
                <div className="col-lg-4">
                    <img src={Computer} alt="Computer"/>
                    <h2 className="caption">Computer Learner</h2>
                </div>
                <div className="col-lg-4">
                    <img src={Music} alt="Music"/>
                    <h2 className="caption">Music Learner</h2>
                </div>
                <div className="col-lg-4">
                    <img src={Airplane} alt="Airplane"/>
                    <h2 className="caption">Lifelong Learner</h2>
                </div>
            </div>        
        </div>
    )
}

export default Home;