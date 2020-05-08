// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;
    let mediumIdx = (Math.floor(nums.length / 2))
    let rootVal = nums[mediumIdx]
    let root = new TreeNode(rootVal);
    
    let leftOfRootVal = nums.slice(0, mediumIdx);
    let rightOfRootVal = nums.slice(mediumIdx + 1);

    root.left = sortedArrayToBST(leftOfRootVal);
    root.right = sortedArrayToBST(rightOfRootVal);

    return root;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))