import { readFileSync } from "fs";

function readFile() {
    let fileData; // This is available in the entire function but not globally
    try {
        /*Const*/ fileData = readFileSync("data.json");
        console.log(JSON.parse(fileData));
    } catch (error) {
        console.log(`Bhai Saab! Koi "Data.json" file nahi Mila, Isliye Agy Ka Code Run Kr Raha !!`);
    }
    console.log(`Next Line!`);
}


// Variable Scoping : The scope of a variable is the region of code where it is accessible
// Variable Shadowing : When a variable with the same name is declared in different scopes

readFile();