/* calculator.js */

export function add(x,y){
	return x + y;
}

export function subtract(x,y){
	return x - y;
}

const calculator = { add, subtract };

export default calculator;

/* calculatorClient.js */

import { add } from './calculator';

const  = calculator;

add(10,20)