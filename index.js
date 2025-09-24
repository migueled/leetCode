var middleNode = function(head) {
    let i = head.length;
    return head.slice(i/2); 
};

console.log(middleNode([1,2,3,4,5]));