import Image from "react-bootstrap/Image";
//import { motion } from 'framer-motion';
//import { useState, useEffect } from 'react';
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Plot from 'react-plotly.js';

function ExtraInfo() {
    return(
        <div className="extraSection">
            <Row>
                <Col className="extraContent bg-color-red">
                <h1>Learn &#128218;</h1>
                <div className="specialExtra">
                    <p>New to competitive programming, but not sure where to start?</p>
                    <Button as="a" href="#learn">Read More</Button>
                </div>
                </Col>
                <Col className="extraContent bg-color-blue">
                <h1>Practice &#128187;</h1>
                <div className="specialExtra">
                    <p>Can’t get enough DSA and want a formal problem set to practice?</p>
                    <Button as="a" href="#practice">View Problems</Button>
                </div>
                </Col>
                <Col className="extraContent bg-color-green">
                <h1>Compete &#127942;</h1>
                <div className="specialExtra">
                    <p>Interested in competing in ICPC or IEEExtreme? Ready to take home worlds?</p>
                    <Button as="a" href="#compete">Read More</Button>
                </div>
                </Col>
                <Col className="extraContent bg-color-yellow">
                <h1>Board &#128106;</h1>
                <div className="specialExtra">
                    <p>Curious about who’s behind ACM? Interested in applying for a board position yourself?</p>
                    <Button as="a" href="#board">View Staff</Button>
                </div>
                </Col>
            </Row>
        </div>
        
    )
}

function AboutACM() {

    return(
        <div className="aboutSection">
            <div className="spacing-y-4"></div>
            <h1 className="whatIsHeader">What is&nbsp; 
                <span className="specialTitle">
                    <span className="txt-color-classic-blue letter" full-expansion="Association">
                        A
                    </span>
                    <span className="txt-color-orange letter" full-expansion="for Computing">
                        C
                    </span>
                    <span className="txt-color-classic-blue letter" full-expansion="Machinery">
                        M
                    </span>
                </span>
                &nbsp;?</h1>
            <hr style={{color: "white"}}></hr>
            <div className="spacing-y-2"></div>
            <div className="d-flex justify-content-evenly align-items-center">
                <Col>
                <Plot
        data={[
          {
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            y: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'orange'},
          }
        ]}
        layout={ {  
            plot_bgcolor: "black",
            paper_bgcolor: "black",  
            width: 640,
            height: 480,
            title: {
              text: 'Time Complexity: O(N^2)',  
              font: { size: 24, family: "Cutive Mono", color: "white" },  
            },
            xaxis: {
              title: {
                text: 'Time Spent at ACM (seconds)', 
                font: { size: 18, family: "Cutive Mono", color: 'white' }, 
            },
            },
            yaxis: {
              title: {
                text: 'Overall Happiness (ng/mL)',  
                font: { size: 18, family: "Cutive Mono", color: 'white' },  
              }} }}
      />
                </Col>
                <Col className="aboutParagraphBG">
                <div className="aboutParagraph">
                    <p className="px-5">ACM@UCI is UCI's official competitive programming club, where coders of all kinds — those passionate about competitive programming, trying to get through technical interviews, or hoping to apply what they learn in their algorithms class — come together and solve problems! Each week, we host informative presentations on various topics in data structures and algorithms. We also hold practice sessions on another day of the week after the session so members can internalize the concepts we cover. Sometimes, we host friendly programming contests for our members as well!</p>
                </div>
                </Col>
            </div>
            <div className="spacing-y-2"></div>
           
        </div>
    )
}

function CenterImage() {
    return(
        <div className="centerImageBg">
            <div className="spacing-y-2"></div>
            <div className="d-flex justify-content-center align-items-center">
                <Image className="homeLogo" src="acm_logo.svg"></Image>
            </div>

            <div className="text-center text-light">
            <h1>Wednesdays 6-8pm</h1>
            <h1>DBH 3011</h1>
            
            </div>
            <div className="spacing-y-3"></div>
        </div>

    )
}

export default function Home() {
    return(
        <div>
        <CenterImage></CenterImage>
        <AboutACM></AboutACM>
        <ExtraInfo></ExtraInfo>
        </div>
    )
}

/*
export default function Home() {
    const [scrolledUp, setScrolledUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const currentScroll = window.pageYOffset;

          if (currentScroll <= 240) {
            setScrolledUp(false)
          } else {
            setScrolledUp(true)
          }
        }
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div style={{ height: '101vh' }}>
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: scrolledUp ? 0 : 1 }}  
            transition={{ duration: 0.5 }}
        >
            <CenterImage></CenterImage>
        </motion.div>

        <motion.div
            className="new-content"
            initial={{ opacity: 0 }}  
            animate={{ opacity: scrolledUp ? 1 : 0 }}  
            transition={{ duration: 0.5 }}
        >
            <AboutACM></AboutACM>
            <ExtraInfo></ExtraInfo>
            
        </motion.div>
        </div>
    )
}
*/