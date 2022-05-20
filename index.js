//Initialize the count as 0
//Listen for clicks on the increment button
//Increment the count variable when the button is clicked (log it out)
// Change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

increment()

//Create a function save(), which logs the count when it's called
function save(){
    console.log(count)

}
