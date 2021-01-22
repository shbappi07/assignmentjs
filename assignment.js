// https://github.com/shbappi07/assignmentjs

//First Problem
// Kilometer to meter converting

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return 'Kilometer can not be negative';

    }
    else {
        var inMeter = kilometer * 1000;
    }
    return inMeter;

}
var testingCalculations = kilometerToMeter(60);
console.log(testingCalculations);

// Second Problem
// Shopping Budget Calculation

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Please Pay Attention While Billing";
    }
    else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
    }
    return totalPrice;
}
var totalcost = budgetCalculator(2, 2, 2)
console.log(totalcost)

//Third Problem
// Hotel Cost Calculation


function hotelCost(daysOfStay) {
    if (daysOfStay < 0) {
        return 'Days Can not be Negative';
    }
    else if (daysOfStay <= 10) {
        var totalFare = daysOfStay * 100;

    } else if (daysOfStay <= 20) {
        var firstTenDaysFare = 10 * 100;
        var restsDay = daysOfStay - 10;
        var restsDayFare = restsDay * 80;
        var totalFare = firstTenDaysFare + restsDayFare;

    } else if (daysOfStay > 20) {
        var firstTenDaysFare = 10 * 100;
        var secondTenDaysFare = 10 * 80;
        var overTwentyDays = daysOfStay - 20;
        var overTwentyDaysFare = overTwentyDays * 50;
        var totalFare = firstTenDaysFare + secondTenDaysFare + overTwentyDaysFare;

    }
    return totalFare;
}

var calculateFare = hotelCost(10);
console.log(calculateFare)


//Fourth Problem
// Finding the largest name from an string Array


function megaFriend(friendList) {
    var initialLength = 0;
    for (var i = 0; i < friendList.length; i++) {
        var getMax = friendList[i].length;
        if (getMax > initialLength) {
            initialLength = getMax;
            var largeName = friendList[i];
        }
    }
    return largeName;
}
var myFriendsNames = ['alim', 'ibrahim', 'johirul Islam', 'sakhwat'];
var largestName = megaFriend(myFriendsNames);
console.log(largestName);