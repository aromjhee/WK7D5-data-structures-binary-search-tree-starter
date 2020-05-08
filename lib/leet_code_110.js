// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    
    let leftCount = 0;
    let rightCount = 0;
    if (!root.left && !root.right) return Math.abs(leftCount - rightCount) <= 1 ;

    if (root.left) {
        leftCount++;
        isBalanced(root.left);
    } else if (root.right) {
        rightCount++;
        isBalanced(root.right);
    }

}