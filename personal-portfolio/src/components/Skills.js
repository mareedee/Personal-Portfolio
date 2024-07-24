import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import HTML from "../assets/img/html.png";
import CSS from "../assets/img/css.png";
import C from "../assets/img/c.png";
import javascript from "../assets/img/javascript.png";
import python from "../assets/img/python.png";
import react from "../assets/img/react.png";
import Github from "../assets/img/github.png";
import tailwind from "../assets/img/tailwind.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                        <p>Delve into the technologies I specialize in. From building responsive web applications to crafting intuitive user experiences.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>Reactjs</h5>
                            </div>
                            <div className="item">
                                <img src={HTML} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={C} alt="Image" />
                                <h5> C++ programming</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>Tailwind CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Github} alt="Image" />
                                <h5>Github</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
