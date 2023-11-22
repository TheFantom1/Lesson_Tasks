function checkX(x) {
    if (x !== 0) {
        console.log('Вірно');
    } else {
        console.log('Невірно');
    }
}

console.log("Значення x:");
checkX(5);
checkX(0);
checkX(-3);


function checkTimeQuarter(time) {
    if (time >= 0 && time <= 59) {
        const quarter = Math.floor(time / 15) + 1;
        console.log(`Час ${time} належить ${quarter} чверті години`);
    } else {
        console.log('Некоректний час');
    }
}

console.log("Четверті години:");
checkTimeQuarter(15);
checkTimeQuarter(30);
checkTimeQuarter(45);
checkTimeQuarter(60);


function checkDayHalf(day) {
    if (day >= 1 && day <= 31) {
        const half = Math.ceil(day / 10);
        console.log(`День ${day} потрапляє в ${half} половину місяця`);
    } else {
        console.log('Некоректний день');
    }
}

console.log("Половини місяця:");
checkDayHalf(5);
checkDayHalf(15);
checkDayHalf(25);
checkDayHalf(32);

function displayDayPlan(dayNumber) {
    let dayPlan;
    switch (dayNumber) {
        case 1:
            dayPlan = 'Понеділок';
            break;
        case 2:
            dayPlan = 'Вівторок';
            break;
        case 3:
            dayPlan = 'Середа';
            break;
        case 4:
            dayPlan = 'Четвер';
            break;
        case 5:
            dayPlan = 'П\'ятниця';
            break;
        case 6:
            dayPlan = 'Субота';
            break;
        case 7:
            dayPlan = 'Неділя';
            break;
        default:
            dayPlan = 'Некоректний день';
            break;
    }
    console.log(`День ${dayNumber} - ${dayPlan}`);
}

console.log("Розклад на тиждень:");
displayDayPlan(1);
displayDayPlan(5);
displayDayPlan(8);

function findMaxNumber(a, b) {
    if (a > b) {
        console.log(`Максимальне число: ${a}`);
    } else if (b > a) {
        console.log(`Максимальне число: ${b}`);
    } else {
        console.log(`Числа ${a} і ${b} рівні`);
    }
}

console.log("\nМаксимальне число:");
findMaxNumber(5, 10);
findMaxNumber(20, 5);
findMaxNumber(7, 7);
