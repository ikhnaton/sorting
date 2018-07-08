const LomutoQuickSortMutating = (orig) => {
	const arr = orig.slice();

	SortMutating({ orig: arr, lo: 0, hi: arr.length-1 });
	return arr;
};

const SortMutating = ({ orig = [], lo, hi }) => {
	const arr = orig;
	if (lo < hi)
	{
		let p = partition({arr, lo, hi});
		SortMutating({orig: arr, lo, hi: p-1});
		SortMutating({orig: arr, lo: p+1, hi});
	}
};

const partition = ({ arr = [], lo, hi}) => {
	const pivot = arr[hi];
	let i = lo - 1;
	for (let j = lo; j < hi; j++)
	{
		if (arr[j] < pivot)
		{
			i++;
			const a = arr[i];
			[arr[i], arr[j]] = [arr[j], a];
		}
	}
	const a = arr[i + 1];
	[arr[i + 1], arr[hi]] = [arr[hi], a];
	return i+1;
}

export default LomutoQuickSortMutating;
