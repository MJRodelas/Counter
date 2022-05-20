//Initialize the count as 0
//Listen for clicks on the increment button
//Increment the count variable when the button is clicked (log it out)
// Change the count-el in the HTML to reflect the new count


let countEl = document.getElementById("count-el")


let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

//Create a function save(), which logs the count when it's called
function save(){
    let saveCount = count + " - "
    saveEl.textContent += saveCount
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph