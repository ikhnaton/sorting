const SimpleJSSort = (orig) => {
	let arr = orig.slice();
	arr.sort((a,b) => (a > b ? 1 : -1));
	return arr;
};

export default SimpleJSSort;
