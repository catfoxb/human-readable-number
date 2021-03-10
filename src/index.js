module.exports = function toReadable(number) {
    const nums = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    const numObj = {
        "0": "",
        "2": "twenty ",
        "3": "thirty ",
        "4": "forty ",
        "5": "fifty ",
        "6": "sixty ",
        "7": "seventy ",
        "8": "eighty ",
        "9": "ninety "
    };

    if (number === 0) {
        return "zero";
    }

    if (number <= nums.length - 1) {
        return nums[number];
    }

    number = number.toString().split("");
    if (number.length === 2) {
        return (numObj[number[0]] + nums[+number[1]]).trim();

    } else if (number.length === 3) {
        if (number[1] === "0" && number[2] === "0") {
            return nums[+number[0]] + " hundred"
        } else if (number[1] === "1") {
            return nums[+number[0]] + " hundred " + nums[+(number[1] + number[2])];
        }

        return (nums[+number[0]] + " hundred " +
            numObj[number[1]] + nums[+number[2]]).trim();
    }
};
