// Selecting elements directly from the DOM

document.body.children[2].children[0].href = "https://www.google.com";

// This method is not recommended
// because when we add new elements to the page,
// the script will break
// because the index will change