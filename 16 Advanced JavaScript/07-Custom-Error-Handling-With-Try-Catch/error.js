import { readFileSync } from "fs";

function readFile() {
    try {
        const fileData = readFileSync("data.json");
    } catch (error) {
        console.log(`Bhai Saab! Koi "Data.json" file nahi Mila, Isliye Agy Ka Code Run Kr Raha !!`);
    }
    console.log(`Next Line!`);
}

readFile();