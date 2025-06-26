import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg0 from "../assets/img/project-img0.png"
import projImg1 from "../assets/img/evconnect.png";
import projImg2 from "../assets/img/TextEd.jpg";
import projImg3 from "../assets/img/Vibify.jpg";
import projImg4 from "../assets/img/blinkmail.jpg";
import projImg5 from "../assets/img/athleteapi.jpg";
import projImg6 from "../assets/img/cozefit.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Roadmap Builder and Peer Pod Matcher",
      description: "GenAI platform for personalized, prompt-refinable roadmaps and peer/mentor matching.(https://brainybinaries-8kh1.onrender.com/)",
      imgUrl: projImg0,
      link:"https://github.com/Tanisha-Puri/BrainyBinaries",
    },
    {
      title: "Athlete API",
      description: "Athlete API uses AI to predict weight, health, and experience, powered by Flask and deployed on Render.",
      imgUrl: projImg5,
      link:"https://github.com/Kritika-Dhiman/athlete-api",
    },
    {
      title: "EV Connect",
      description: "Powering sustainable travel with smart, seamless EV charging solutions.(https://ev-connect.vercel.app/)",
      imgUrl: projImg1,
      link:"https://github.com/Kritika-Dhiman/EVConnect",
    },
    {
      title: "TxtEd",
      description: "A minimalist text editor built for seamless, distraction-free writing",
      imgUrl: projImg2,
      link:"https://github.com/Kritika-Dhiman/TxtED",
    },
    {
      title: "VibiFy",
      description: "A sleek, intuitive music player that amplifies your listening experience.",
      imgUrl: projImg3,
      link:"https://github.com/Kritika-Dhiman/Music-Player",
    },
    {
      title: "BlinkMail",
      description: "A fast, Python-powered email tool built for effortless automation and integration",
      imgUrl: projImg4,
      link: "https://github.com/Kritika-Dhiman/BlinkMail",
    },
    
    {
      title: "CozeFit",
      description: "CozeFit blends style and function to elevate modern living spaces.",
      imgUrl: projImg6,
      link:"https://github.com/Kritika-Dhiman/cozeFit-Furniture_website",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
