import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import LandingPage from "../assets/img/LandingPage.png";
import WebForum from "../assets/img/Web-Forum.png";
import ShopIt from "../assets/img/ShopIt.png";
import Admin from "../assets/img/Admin.png";
import Dashboard from "../assets/img/Dahboard.png";
import SwapToken from "../assets/img/SwapToken.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projects = [
    {
      title: "Admin Dashboard for a Hospital",
      description: "Education & Research",
      imgUrl: Admin,
    },
    {
      title: "ShopIt",
      description: "Ecommerce",
      imgUrl: ShopIt,
    },
    {
      title: "Swap",
      description: "Crytocurrency",
      imgUrl: SwapToken,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics",
      imgUrl: Dashboard,
    },
    {
      title: "Community Web Forum",
      description: "Design & Development",
      imgUrl: WebForum,
    },
   
    {
      title: "Bank Landing Page",
      description: "Banking",
      imgUrl: LandingPage,
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
                <p>Welcome to my projects section! Here, you'll find a showcase of some of the exciting projects I've worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Skills</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">More..</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {isMobile ? (
                        <Carousel
                          additionalTransfrom={0}
                          arrows
                          autoPlaySpeed={3000}
                          centerMode={false}
                          className=""
                          containerClass="container-with-dots"
                          dotListClass=""
                          draggable
                          focusOnSelect={false}
                          infinite
                          itemClass=""
                          keyBoardControl
                          minimumTouchDrag={80}
                          renderButtonGroupOutside={false}
                          renderDotsOutside={false}
                          responsive={{
                            desktop: {
                              breakpoint: {
                                max: 3000,
                                min: 1024
                              },
                              items: 3,
                              partialVisibilityGutter: 40
                            },
                            mobile: {
                              breakpoint: {
                                max: 767,
                                min: 0
                              },
                              items: 1,
                              partialVisibilityGutter: 30
                            },
                            tablet: {
                              breakpoint: {
                                max: 1024,
                                min: 767
                              },
                              items: 2,
                              partialVisibilityGutter: 30
                            }
                          }}
                          showDots={false}
                          sliderClass=""
                          slidesToSlide={1}
                          swipeable
                        >
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Carousel>
                      ) : (
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Explore my diverse range of projects in this section. From designing sleek admin dashboards to building intuitive e-commerce platforms, each project reflects my commitment to innovation and excellence.</p>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>Discover the stories behind my projects. Each project is a testament to my passion for crafting exceptional digital experiences. </p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
