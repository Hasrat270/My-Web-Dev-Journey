// function greetUser(greetPrefix ,userName = "User") {
//     console.log(greetPrefix + " " + userName + "!");
// } 

// greetUser("Hi There!","Hasrat");
// greetUser("Hi There!");

function sumUp(numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number; // result = result + number;
    }

    return result;
}

console.log(sumUp([3203,4343,343243,4,324,32,4,324,32,4,32]))

// This is also okay but we have another method for it check the next Part !