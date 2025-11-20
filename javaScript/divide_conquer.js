// Divide And Conquer - finding the sum of subarrays
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

var maxSubArray = function(nums) {
    function helper(left, right) {
        if (left === right) {
            return nums[left];
        }
        const mid = Math.floor((left + right) / 2);
        const leftMax = helper(left, mid);
        const rightMax = helper(mid + 1, right);
        let crossMax = nums[mid];
        let tempSum = nums[mid];
        for (let i = mid - 1; i >= left; i--) {
            tempSum += nums[i];
            crossMax = Math.max(crossMax, tempSum);
        }
        tempSum = crossMax;
        for (let i = mid + 1; i <= right; i++) {
            tempSum += nums[i];
            crossMax = Math.max(crossMax, tempSum);
        }
        return Math.max(leftMax, rightMax, crossMax);
    }
    return helper(0, nums.length - 1);
};
// Example usage:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
console.log(maxSubArray([5,4,-1,7,8])); // Output: 23   



// simplified version using Kadane's Algorithm
var maxSubArrayKadane = function(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
};  
// Example usage:
console.log(maxSubArrayKadane([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArrayKadane([1]));    // Output: 1
console.log(maxSubArrayKadane([5,4,-1,7,8])); // Output: 23 
