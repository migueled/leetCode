/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/
let nums = [1, 2, 3, 4];
for (let i = 1; i < nums.length; i++) {
    nums[i]=nums[i-1]+nums[i];
}
console.log(nums);