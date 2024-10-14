function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const remainingValue = target - nums[i];

        if (map.has(remainingValue)) {
            return [map.get(remainingValue)!, i];
        }

        map.set(nums[i], i);
    }

    throw new Error("No two sum solution");
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
