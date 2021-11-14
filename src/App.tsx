import React, { useState } from 'react';
import './App.scss';

function App () {

	const [count, setCount] = useState<number> ( 0 );
	const decrement = () => setCount ( count - 1 );
	const increment = () => setCount ( count + 1 );

	return (
		<div className="app">
			<h1 className={count > 0 ? 'positive' : count < 0 ? 'negative' : ''}>{ count }</h1>
			<div className="button__wrapper">
				<button onClick={ decrement }>-</button>
				<button onClick={ increment }>+</button>
			</div>
		</div>
	);
}

export default App;
