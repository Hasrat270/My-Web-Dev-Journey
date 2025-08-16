const person = {
    userName: "Hasrat",
    age: 20
}

function sumUp(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(sumUp(2,2,2,2,2,2,2));

// Functions Are Objects Because we can add values to it !
// sumUp.SomeValue = "Your Code Here!" <<< Like This we can Add Values To functions like Objects !