import LomutoQuickSortMutating from "./LomutoQuickSortMutating.js";

const BinarySearch = (searchItem, arr) => {
	const arr2 = LomutoQuickSortMutating(arr);
	return { position: search(searchItem, arr2, 0, arr.length), arr: arr2, target: searchItem };
};

const search = (item, arr, lo, hi) =>
{
	let p = parseInt((hi - lo) / 2) + lo;
	if ((hi-lo) == 2)
	{
		if (arr[lo+1] != item)
		{
			return "not found";
		}
		else
		{
			return lo + 1;
		}
	}
	else if (item < arr[p])
	{
		return search(item, arr, lo, p);
	}
	else if (item > arr[p])
	{
		return search(item, arr, p, hi);
	}
	return p;
}

export default BinarySearch;
