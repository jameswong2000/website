import WordHeading from "./WordHeading";
import "../style/Portfolio.css";
import data from "../data/portfolio.json";
import SkillsBoard from "./SkillsBoard";
import TabularBoard from "./TabularBoard";
import TimelineBoard from "./TimelineBoard";

function Portfolio() {
    return (
        <div id="portfolio" name="portfolio">
            <WordHeading word="Portfolio"></WordHeading>
            <div id="introduction" className="container">
                {data.Introduction}
            </div>
            <div id="boards" className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <SkillsBoard id="skills-board" title="Skills"></SkillsBoard>
                    </div>
                    <div className="col-lg-8">
                        <TabularBoard id="educations-board" title="Educations" data={data.Educations}></TabularBoard>
                        <TabularBoard id="working-board" title="Working Experiences" data={data.WorkingExperiences}></TabularBoard>
                    </div>
                </div>
                <div className="row">
                    <TimelineBoard id="projects-board" title="Projects" data={data.Projects}></TimelineBoard>
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio;