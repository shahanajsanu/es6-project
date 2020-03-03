function add(num, num3){
    if(num3 == undefined){
        num3 = 20;
    }
    return num + num3
}
const total = add(17);
console.log(total);


function add(num1, num2){
    num2 = num2 || 10;
    return num1 + num2;
}

const amount = add(20);
console.log(amount);

function add(number, number2 = 20){
    return number + number2;
}
const totalAmount = add(30);
console.log(totalAmount);