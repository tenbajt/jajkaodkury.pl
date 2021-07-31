import React from "react";
import Styled from "styled-components";
import { color, breakpoint } from "../tenbajt/Utils";
import ActiveWeekDaysIndicator from "../components/ActiveWeekDaysIndicator";


const Container = Styled.div`
    padding: 1.25rem 1rem;

    &:last-child {
        border-top: 1px solid ${color.gray(200)};
    }

    ${breakpoint.sm} {
        &:last-child {
            border-top: none;
            border-left: 1px solid ${color.gray(200)};
        }
    }

    ${breakpoint.sm} {
        padding: 1.5rem 1.75rem;
    }
`;

const Icon = Styled.i`
    color: ${color.yellow(800)};
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: ${color.yellow(100)};
`;

const Title = Styled.h2`
    color: ${color.gray(900)};
    font-size: 1.25rem;
    margin-top: 2.5rem;
    font-weight: 500;
    line-height: 1.75rem;
`;

const Text = Styled.p`
    color: ${color.gray(500)};
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
`;

const TimeFrame = Styled.div`
    gap: 0.75rem;
    color: ${color.gray(900)};
    display: grid;
    font-size: 1rem;
    margin-top: 1rem;
    line-height: 1.5rem;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;
`;

const OrderDetails = (props) => (
    <Container>
        <Icon className="material-icons-outlined">
            {props.icon}
        </Icon>
        <Title>
            {props.title}
        </Title>
        <Text>
            {props.text}
        </Text>
        <TimeFrame>
            <i className="material-icons">
                schedule
            </i>
            <span>
                {props.timeFrame}
            </span>
        </TimeFrame>
        <Text>
            W następujące dni tygodnia:
        </Text>
        <ActiveWeekDaysIndicator active={props.activeWeekDays}/>
    </Container>
);

export default OrderDetails;