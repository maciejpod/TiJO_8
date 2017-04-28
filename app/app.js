function reverseNumber(num)
{
    if (isNaN(num)) {
        return false;
    }
    num += '';
    return parseInt(num.split("").reverse().join(""));
}

function returnOnlyLetter(str)
{
    if (typeof str !== 'string') {
        return false;
    }
    var temp = str.split('');
    var az = /^[a-z]/;
    var outputArray = [];
    var x = temp.length;
    temp.forEach(function (item) {
        if(az.test(item)) {
            outputArray.push(item);
        }
    })
    return outputArray.join("");
}

function isEmail(email)
{
    var pattern = /[\w_.-]+@[\w_.-]+\.[a-z]{2,3}/i;
    if (pattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    reverseNumber: reverseNumber,
    returnOnlyLetter: returnOnlyLetter,
    isEmail: isEmail
};
