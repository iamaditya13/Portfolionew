import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    z-index: 10;
`

const CTAButton = styled.a`
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    background: ${props => props.primary ? `linear-gradient(90deg, #ff00cc, #333399)` : 'transparent'};
    color: ${props => props.primary ? '#fff' : props.theme.body};
    border: 2px solid ${props => props.primary ? 'transparent' : props.theme.body};
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: ${props => props.primary ? '0 10px 20px rgba(255, 0, 204, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.1)'};
        background: ${props => props.primary ? `linear-gradient(90deg, #ff00cc, #333399)` : props.theme.body};
        color: ${props => props.primary ? '#fff' : props.theme.text};
    }
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi, I'm Aditya Kumar</h1>
                    <h3>Full Stack Developer | AI SaaS Engineer</h3>
                    <h6>Building scalable AI SaaS products that turn voice, workflows, and collaboration into real businesses.</h6>
                    <ButtonGroup>
                        <CTAButton href="https://github.com/aditya-kumar" target="_blank">View Projects</CTAButton>
                        <CTAButton href="/resume.pdf" target="_blank" primary>Download Resume</CTAButton>
                        <CTAButton href="mailto:imaditya4work@gmail.com">Contact Me</CTAButton>
                    </ButtonGroup>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
