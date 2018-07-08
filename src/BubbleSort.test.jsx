import BubbleSort from './BubbleSort.js';
import randomize from './randomize.js';

describe('BubbleSort', () =>
{
	it('Uses the sort capability built into Javascript arrays', () =>
	{
		expect.assertions(2);
		let arr = [];
		for (let n = 0; n < 100; n++)
		{
			arr[n] = n + 1;
		}

		const arr2 = randomize(arr, 150);
		const result = BubbleSort(arr2);
		expect(result[0]).toBe(1);
		expect(result[99]).toBe(100);
	});
});
