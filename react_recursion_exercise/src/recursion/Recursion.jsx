import React from 'react';
import RecursiveComponent from './RecursiveComponent';
import useTimer from '../hooks/useTimer';

// write components here
const One = ({children}) => <>One {children}</>;
const Two = ({children}) => <>Two {children}</>;
const Three = ({children}) => <>Three {children}</>;

const components = [
	One,
	Two,
	Three,
];

function Recursion() {
	const seconds = useTimer();

	return (
		<div className='App-wrapper'>
			<div className='App-timer'>
				{seconds} seconds
			</div>
			<RecursiveComponent components={components} />
		</div>
	);
}

Recursion.propTypes = {
  // ...
};

export default Recursion;
