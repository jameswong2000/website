import "../style/Home.css";
import WordHeading from "./WordHeading";

const computer = "../assets/images/computer.jpg";
const music = "../assets/images/music.jpg";
const airplane = "../assets/images/airplane.jpg";


function Home() {
    return (
        <div id="home" name="home">
            <WordHeading word="James Wong"></WordHeading>
            <div className="row justify-content-center" id="photos">
                <div className="col-lg-4">
                    <img src={computer} alt="Computer"/>
                    <h2 className="caption">Computer Learner</h2>
                </div>
                <div className="col-lg-4">
                    <img src={music} alt="Music"/>
                    <h2 className="caption">Music Learner</h2>
                </div>
                <div className="col-lg-4">
                    <img src={airplane} alt="Airplane"/>
                    <h2 className="caption">Lifelong Learner</h2>
                </div>
            </div>        
        </div>
    )
}

export default Home;