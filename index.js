
// document.getElementById("count-el").innerText=5
//  let firstBatch = 5
// let secondBath = 7
// let count = firstBatch + secondBath
// console.log(count)



// function increment(){
//     console.log("The button was click")
// }


// function myLogger(){
//     console.log(42)
  
// }

// myLogger()

//Initialize the count as 0
//Listen for clicks on the increment button
//Increment the count variable when the button is clicked (log it out)
// Change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}

increment()