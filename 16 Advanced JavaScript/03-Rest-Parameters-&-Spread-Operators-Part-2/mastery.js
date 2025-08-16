function sumUp(...numbers) { // Here we used it to combine any Amount of Received Parameters !
    let result = 0;

    for (const number of numbers) {
        result += number; // Means : result = result + number;
    }

    return result;
}

const inputNumbers = [1,5,10,11,20,31];
console.log(sumUp(...inputNumbers)); // Here we spread the Values with (...) <<< THIS Operator !

const values = [10,20,30,40]; // Here we spread the Values with (...) <<< THIS Operator !
console.log(...values);