import React from 'react';
import ReactDOM from 'react-dom';
import LomutoQuickSort from './LomutoQuickSort.js';
import SimpleJSSort from './SimpleJSSort.js';
import LomutoQuickSortMutating from './LomutoQuickSortMutating.js';
import BubbleSort from './BubbleSort.js';
import BubbleSort2 from './BubbleSort2.js';
import randomize from './randomize.js';
import BinarySearch from './BinarySearch.js';
import './app.less';

class App extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		let arr = [];
		for (let n = 0; n < 10000; n++)
		{
			arr[n] = n + 1;
		}

		const arr2 = randomize(arr, 150000);
		const ts1 = new Date();
		const arr3 = LomutoQuickSort(arr2);
		const ts2 = new Date();
		const arr4 = SimpleJSSort(arr2);
		const ts3 = new Date();
		const arr5 = LomutoQuickSortMutating(arr2);
		const ts4 = new Date();
		const arr6 = BubbleSort(arr2);
		const ts5 = new Date();
		const arr7 = BubbleSort2(arr2);
		const ts6 = new Date();
		console.log(arr2);
		console.log("Simple JS sort: ", ts3.getTime() - ts2.getTime());
		console.log(arr4);
		console.log("Non-mutating sort: ", ts2.getTime() - ts1.getTime());
		console.log(arr3);
		console.log("Mutating sort: ", ts4.getTime() - ts3.getTime());
		console.log(arr5);
		console.log("Bubble sort: ", ts5.getTime() - ts4.getTime());
		console.log(arr6);
		console.log("Bubble sort2: ", ts6.getTime() - ts5.getTime());
		console.log(arr7);
		let item = parseInt(Math.random() * arr.length)	+ 1;
		const searched = BinarySearch(item, arr2);

		return (
			<div>
				Simple JS sort: { ts3.getTime() - ts2.getTime() } milliseconds. <br/>
				Non-mutating sort: { ts2.getTime() - ts1.getTime() } milliseconds. <br/>
				Mutating sort: { ts4.getTime() - ts3.getTime() } milliseconds. <br/>
				Bubble sort: { ts5.getTime() - ts4.getTime() } milliseconds. <br/>
				Bubble sort2: { ts6.getTime() - ts5.getTime() } milliseconds. <br/>
				<br/>
				Binary Search<br/>
				Target: {searched.target}<br/>
				Found at location: {searched.position}<br/>
				Sorted Array: {searched.arr.map ((item, index) =>
					index === searched.position
					? <span style={{color: "#0200ff", backgroundColor: "#bfbfbf"}}>{item}, </span>
					: `${item}, `
				)}<br/>
			</div>
		);
	}
}

document.addEventListener("DOMContentLoaded", (event) => {
	ReactDOM.render(
		<App/>,
		document.getElementById("root")
	);
});

