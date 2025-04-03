import Image from "react-bootstrap/Image";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Col from "react-bootstrap/Col"; 

function ExtraInfo() {
    return(
        <h1>Extra Info</h1>
    )
}

function AboutACM() {
    return(
        <div className="aboutSection">
            <h1>What is&nbsp; 
                <span className="specialTitle">
                    <span style={{color: "red"}} className="letter" full-expansion="Association">
                        A
                    </span>
                    <span className="letter" full-expansion="for Computing">
                        C
                    </span>
                    <span className="letter" full-expansion="Machinery">
                        M
                    </span>
                </span>
            ?</h1>
            <div className="d-flex justify-content-evenly align-items-center">
                <Col>
                <h1>hey</h1>
                </Col>
            <Col>
            <Image className="graph" src="temporary_math_bg.jpg"></Image>
            </Col>
            </div>
           
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
            <div className="spacing-y-10"></div>
        </div>

    )
}

export default function Home() {
    const [scrolledUp, setScrolledUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const currentScroll = window.pageYOffset;

          if (currentScroll <= 200) {
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