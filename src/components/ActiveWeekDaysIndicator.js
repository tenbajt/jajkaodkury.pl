import React from "react";
import Styled from "styled-components";
import { color } from "../tenbajt/Utils";


const Container = Styled.div`
    gap: 1px;
    display: grid;
    overflow: hidden;
    margin-top: 1.25rem;
    align-items: center;
    border-radius: 0.5rem;
    grid-auto-flow: column;
`;

const Day = Styled.span`
    color: ${props => props.active ? color.black() : color.white()};
    height: 2rem;
    display: grid;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
    align-items: center;
    justify-items: center;
    background-color: ${props => props.active ? color.yellow(300) : color.yellow(100)};
`;

const days = {
    'PN': {active: false},
    'WT': {active: false},
    'ŚR': {active: false},
    'CZ': {active: false},
    'PT': {active: false},
    'SO': {active: false},
    'ND': {active: false},
}

const ActiveWeekDaysIndicator = ({ className, active }) => {
    active.forEach(day => {
        days[day].active = true
    });

    return (
        <Container className={className}>
            {Object.keys(days).map((key) => (
                <Day active={days[key].active}>
                    {key}
                </Day>
            ))}
        </Container>
    );
}

export default ActiveWeekDaysIndicator;