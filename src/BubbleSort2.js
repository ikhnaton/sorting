const BubbleSort2 = (orig) => {
	let arr = orig.slice();
	let temp = 0;
	arr.map((itemA, indexA) => {
		let swapped = false;
		arr.map((itemB, indexB) => {
			if (arr[indexA] < arr[indexB])
			{
				temp = arr[indexA];
				arr[indexA] = arr[indexB];
				arr[indexB] = temp;
				swapped = true;
			}
		});
		if (!swapped)
		{
			return arr;
		}
	});

	return arr;
};

export default BubbleSort2;
