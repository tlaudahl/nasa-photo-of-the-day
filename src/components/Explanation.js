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
            {props.media_type === 'video' ? 
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: 'white', textShadow: '2px #dddddd' }}>Video Explanation</h3>
                {props.copyright && 
                <h3 style={{ color: 'white', textShadow: '2px #dddddd' }}>&copy; {props.copyright}</h3>
                }
            </div> : props.media_type === 'image' ? 
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: 'white', textShadow: '2px #dddddd' }}>Picture Explanation</h3>
                {props.copyright && 
                <h3 style={{ color: 'white', textShadow: '2px #dddddd' }}>&copy; {props.copyright}</h3>
                }
            </div> : 
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ color: 'white', textShadow: '2px #dddddd' }}>Picture Explanation</h3>
                {props.copyright && 
                <h3 style={{ color: 'white', textShadow: '2px #dddddd' }}>&copy; {props.copyright}</h3>
                }
            </div>}
            <ExplanationPara>{props.explanation}</ExplanationPara>
        </ExplanationDiv>
    )
}
