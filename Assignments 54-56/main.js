let friends = ["Ahmed", "Sayed", "Ali", 1, 2,"anam", "Mahmoud", "Amany"];let index = 0;let counter = 0;let i = counter;letter = "A";while (index < friends.length) {    if (typeof friends[index] !== "number")    {        if (friends[index][i].toUpperCase() !== letter){            ++counter            console.log(`${counter} => ${friends[index]}`)        }    }    index++}let  num =[1,2,3,4,5]; // جمع  الارقامlet  n = 0;let  sum = 0;while (n < num.length){    sum += num[n]; // sum = sum + num[n]    n++}console.log(sum)