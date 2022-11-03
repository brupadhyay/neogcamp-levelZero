const dobInput = document.querySelector("#birth-input");
const showBtn = document.querySelector("#show-btn");
const res = document.querySelector("#result");
const privacyNote = document.querySelector("#privacy-note");
function reverseStr(str) {
    var charList = str.split('');
    var reversedList = charList.reverse();
    var reversedStr = reversedList.join('');
    return reversedStr;
}

function isPalindrome(str) {
    var reverse = reverseStr(str);

    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

function dateToString(date) {
    var dateStr = {
        day: '',
        month: '',
        year: ''
    };

    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;

}

function getAllDateFormats(date) {
    var dateStr = dateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(2);
    var yymmdd = dateStr.year.slice(2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
};

function checkPalindromeForAllDateFormats(date) {
    var listOfDates = getAllDateFormats(date);
    // console.log(listOfDates);
    for (let i = 0; i < listOfDates.length; i++) {
        // console.log("i is -> ", i);
        if (isPalindrome(listOfDates[i])) {
            return true;
        }
    }
    return false;
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //index is 0-11

    if (month == 2) {
        //check for leap year
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

function getPrevDate(date) {
    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month == 3) {
        if(isLeapYear(year)) {
            if( day < 1) {
                day = 29;
            }
        } else {
            day = 28;
        }
        month--;
    } else {
        if( day < 1 ){
            month--;
            day = daysInMonth[month - 1];
        }
    }

    if(month < 1){
        day = 31;
        month = 12;
        year--;
    }

    return {
        day: day,
        month: month,
        year: year
    }
}

function getPrevPalindromeDate(date) {
    var cnt = 0;
    var prevDate = getPrevDate(date);

    while(1){
        cnt++;
        if( checkPalindromeForAllDateFormats(prevDate) ){
            break;
        }
        prevDate = getPrevDate(prevDate);
    }
    prevDate = dateToString(prevDate);
    return [prevDate,cnt];
}

function getNextPalindromeDate(date) {
    var cnt = 0;
    var nextDate = getNextDate(date);

    while (1) {
        cnt++;
        if (checkPalindromeForAllDateFormats(nextDate)) {
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    nextDate = dateToString(nextDate);
    return [nextDate, cnt];
}

function showHandler() {
    
    var inputData = dobInput.value;
    if (inputData !== '') {
        privacyNote.style.display = 'none';
        var listOfDate = inputData.split('-');
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        };

        var isPalindrome = checkPalindromeForAllDateFormats(date);
        if (isPalindrome) {
            res.innerText = "Yay! Your birthday is a palindrome 🥳🥳";
        } else {
            var prevPalindromeDate = getPrevPalindromeDate(date);
            var nextPalindromeDate = getNextPalindromeDate(date);
            res.innerText = "Your birthday is not a palindrome, the next palindrome date is " + nextPalindromeDate[0].day + '-' + nextPalindromeDate[0].month + '-' + nextPalindromeDate[0].year + ", you missed it by " + nextPalindromeDate[1] + " days🙁" + " OR, the previous palindrome date is " + prevPalindromeDate[0].day + '-' + prevPalindromeDate[0].month + '-' + prevPalindromeDate[0].year + ", you got ahead of this by " + prevPalindromeDate[1] + " days😢";
        }
    } else {
        res.innerText = "We don't store your data, please enter your birthday"
    }
}

showBtn.addEventListener("click", showHandler);