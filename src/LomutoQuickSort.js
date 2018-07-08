const LomutoQuickSort = (arr) => {
	return Sort({ orig: arr, lo: 0, hi: arr.length-1 });
};

const Sort = ({ orig = [], lo, hi }) =>
{
	let arr = orig.slice();
	if (lo < hi)
	{
		let obj = partition({arr, lo, hi});
		arr = Sort({orig: obj.arr, lo, hi: obj.p-1});
		arr = Sort({orig: arr, lo: obj.p+1, hi});
	}
	return arr;
};

const partition = ({ arr = [], lo, hi}) =>
{
	const workArray = arr.slice();
	const pivot = workArray[hi];
	let i = lo - 1;
	for (let j = lo; j < hi; j++)
	{
		if (workArray[j] < pivot)
		{
			i++;
			const a = workArray[i];
			[workArray[i], workArray[j]] = [workArray[j], a];
		}
	}
	const a = workArray[i + 1];
	[workArray[i + 1], workArray[hi]] = [workArray[hi], a];
	return {p: i+1, arr: workArray};
}

export default LomutoQuickSort;
