import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Back = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: rgba(0,0,0,0.1);
    box-shadow: 0 0 8px 6px rgba(0,0,0,0.2);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const BackBtnSvg = (props) => (
    <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
)

const BackButton = () => {
    return (
        <Back>
            <NavLink to="/">
                <BackBtnSvg width={24} height={24} />
            </NavLink>
        </Back>
    )
}

export default BackButton
