import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                pauseOnHover={true}
                swipeable={true}
                draggable={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <h5>API Integration</h5>
                </div>
                <div className="item">
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <h5>Kubernetes</h5>
                </div>
                <div className="item">
                  <h5>Version Control (Git and GitHub)</h5>
                </div>
                <div className="item">
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
