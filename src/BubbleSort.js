const BubbleSort = (orig) => {
	let arr = orig.slice();
	let swapped = false;

	do {
		swapped = false;
		arr.map((item, index) => {
			if (index < (arr.length - 1))
			{
				if (arr[index] > arr[index + 1])
				{
					arr[index] = arr[index + 1];
					arr[index + 1] = item;
					swapped = true;
				}
			}
		})
	}
	while (swapped);
	return arr;
};

export default BubbleSort;
