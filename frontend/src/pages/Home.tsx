import Image from "react-bootstrap/Image";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

function ExtraInfo() {
    return(
        <h1>Extra Info</h1>
    )
}

function AboutACM() {
    return(
        <h1>yas queen</h1>
    )
}

function CenterImage() {
    return(
        <div className="centerImageBg">
            <div className="spacing-y-2"></div>
            <div className="d-flex justify-content-center align-items-center">
                <Image className="homeLogo" src="acm_logo.svg"></Image>
            </div>

            <div className="text-center">
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