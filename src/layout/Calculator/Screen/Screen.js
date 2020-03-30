import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen.js';
import ComputationScreen from './ComputationScreen/ComputationScreen.js';

const screen = (props) => (
    <section className="screen">
        <ResultScreen>
            {props.result}
        </ResultScreen>
        <ComputationScreen>
            {props.equation}
        </ComputationScreen>
    </section>
);

export default screen;