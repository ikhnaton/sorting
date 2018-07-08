const randomize = (arr, swaps) =>
{
	const workArray = [...arr];
	let a, p1, p2 = 0;
	for (let n = 0; n < swaps; n++)
	{
		p1 = parseInt(Math.random() * workArray.length);
		p2 = parseInt(Math.random() * workArray.length);
		a = workArray[p1];
		[workArray[p1],workArray[p2]] = [workArray[p2], a];
	}
	return workArray;
}

export default randomize;
