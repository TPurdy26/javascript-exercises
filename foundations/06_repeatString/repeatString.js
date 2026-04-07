const repeatString = function(str, num) {
    if (num === 0) {
        return "ERROR";
    }
    else {
        let finalStr = "";
        for(let i = 0; i < num; i++) {
            finalStr += str;
        
        }
        return finalStr;
    }
};

console.log(repeatString("cool", 3))

// Do not edit below this line
module.exports = repeatString;
