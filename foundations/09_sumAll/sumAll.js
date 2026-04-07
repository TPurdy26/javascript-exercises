const sumAll = function(a, b) {
    let total = 0
    for(let i = a; i <= b; i++) {
        total += i
    }
    return total
};
console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;
