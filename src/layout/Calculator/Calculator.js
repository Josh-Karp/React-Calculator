import React from 'react';

import Screen from './Screen/Screen.js'
import Keypad from './Keypad/Keypad.js';

const calculator = () => 
    <main className="calculator">
        <Screen />
        <Keypad />
    </main>;

export default calculator;