import '../style/Home.css';
import WordHeading from "./WordHeading";
import Computer from "../images/computer.jpg";
import Music from "../images/music.jpg";
import Airplane from "../images/airplane.jpg";

function Home() {
    return (
        <div id="home">
            <WordHeading word={["James Wong"]}></WordHeading>
            <div className="row" id="photos">
                <div className="col-md-4">
                    <img src={Computer} alt="Computer"/>
                </div>
                <div className="col-md-4">
                    <img src={Music} alt="Music"/>
                </div>
                <div className="col-md-4">
                    <img src={Airplane} alt="Airplane"/>
                </div>
            </div>
            <WordHeading word={["Computer Learner", "Music Learner", "Lifelong Learner"]}></WordHeading>
        </div>
    )
}

export default Home;