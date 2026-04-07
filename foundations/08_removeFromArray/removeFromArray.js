const removeFromArray = function(arr, val) {
    return arr.filter((item) => {
        if(item != val) {
            return true;
        }
    })
};

console.log(removeFromArray([1,2,3,3,3,3,3,6,3,3,5,6,3,6,6,4,3,4], 3))
// Do not edit below this line
module.exports = removeFromArray;
