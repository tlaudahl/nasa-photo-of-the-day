import React from 'react'
import styled from "styled-components";

const ExplanationDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ExplanationPara = styled.p`
    line-height: 1.6;
    font-size: 16px;
`

export default function Explanation(props) {
    return (
        <ExplanationDiv>
            <h3>Photo Explanation</h3>
            <ExplanationPara>{props.explanation}</ExplanationPara>
        </ExplanationDiv>
    )
}
