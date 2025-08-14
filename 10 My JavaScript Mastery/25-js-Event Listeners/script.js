function changeParagraphText() {
    document.querySelector("p").textContent = "Clicked";
    console.log("Paragraph is Clicked");
}

document.querySelector("p").addEventListener("click", changeParagraphText);