module.exports = function toReadable (number) {
    const s = number.toString();
    let answerArr = [];
    let exp = "";
    for (let i = 0; i < s.length; i++) { 
        switch(s[i]) {
            case "0":
                answerArr.push("zero");
                break;
            case "1":
                answerArr.push("one");
                break;
            case "2":
                answerArr.push("two");
                break;
            case "3":
                answerArr.push("three");
                break;
            case "4":
                answerArr.push("four");
                break;
            case "5":
                answerArr.push("five");
                break;
            case "6":
                answerArr.push("six");
                break;
            case "7":
                answerArr.push("seven");
                break;
            case "8":
                answerArr.push("eight");
                break;
            case "9":
                answerArr.push("nine");
                break;
        }
    }
    answerArr.reverse();
    if (answerArr[2] !== undefined) {
        answerArr[2] = answerArr[2] + " hundred";
    }
    if (answerArr[0] === "zero" && answerArr[1] === "zero" && answerArr[2] !== undefined) {
        answerArr[0] = "";
    }
    if (answerArr[1] === "zero" && answerArr[2] !== undefined) {
        return (answerArr[2] + " " + answerArr[0]).trim();
    }
    if (answerArr[1] === "one") {
        switch(answerArr[0]) {
            case "zero":
                answerArr[0] = "";
                answerArr[1] = "ten";
                break;
            case "one":
                answerArr[0] = "";
                answerArr[1] = "eleven";
                break;
            case "two":
                answerArr[0] = "";
                answerArr[1] = "twelve";
                break;
            case "three":
                answerArr[0] = "";
                answerArr[1] = "thirteen";
                break;
            case "five":
                answerArr[0] = "";
                answerArr[1] = "fifteen";
                break;
            case "eight":
                answerArr[0] = "";
                answerArr[1] = "eighteen";
                break;
            default:
                answerArr[1] = answerArr[0] + "teen";
                answerArr[0] = "";
        }
    }
    switch(answerArr[1]) {
        case "two":
            answerArr[1] = "twenty";
            break;
        case "three":
            answerArr[1] = "thirty";
            break;
        case "four":
            answerArr[1] = "forty";
            break;
        case "five":
            answerArr[1] = "fifty";
            break;
        case "six":
            answerArr[1] = "sixty ";
            break;
        case "seven":
            answerArr[1] = "seventy";
            break;
        case "eight":
            answerArr[1] = "eighty";
            break;
        case "nine":
            answerArr[1] = "ninety";
            break;
    }
    if (answerArr.length > 1 && answerArr[0] === "zero") {
        answerArr[0] = "";
    }
    return answerArr.reverse().join(" ").trim();
}