var rearrangeArray = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    let n = nums.length;
    let a = new Array(n);
    let j = 0;
    for (let i = 0; i < n; i += 2, ++j) {
        a[i] = nums[j];
    }
    for (let i = 1; i < n; i += 2, ++j) {
        a[i] = nums[j];
    }
    return a;
};