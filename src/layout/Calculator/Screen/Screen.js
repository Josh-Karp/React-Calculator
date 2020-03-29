import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen.js';
import ComputationScreen from './ComputationScreen/ComputationScreen.js';

const screen = () => (
    <section className="screen">
        <ResultScreen />
        <ComputationScreen />
    </section>
);

export default screen;