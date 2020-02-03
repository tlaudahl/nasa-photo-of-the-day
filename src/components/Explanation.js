import React from 'react'
import styled from "styled-components";

const ExplanationDiv = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: 5px;
    background-color: rgba(24,26,34,.53);
    padding: 2%;
    margin: 0 auto;
    width: 80%;
    `

const ExplanationPara = styled.p`
    line-height: 1.6;
    font-size: 16px;
    color: #dddddd;
    margin: 0;
`

export default function Explanation(props) {
    return (
        <ExplanationDiv>
            <h3 style={{ color: 'white', textShadow: '2px #dddddd' }}>Photo Explanation</h3>
            <ExplanationPara>{props.explanation}</ExplanationPara>
        </ExplanationDiv>
    )
}
