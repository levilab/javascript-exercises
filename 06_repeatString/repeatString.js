const repeatString = function(string, num) {
    let strings='';
    if (num < 0) {
        return "ERROR"
    } else if (string ==='') {
        return ''
    }

    for (let i=1; i<=num ; i++) {
        strings += string
    }
    return strings; 
};

// Do not edit below this line
module.exports = repeatString;
