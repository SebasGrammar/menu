"use strict"

function handleData()
{
    var form_data = new FormData(document.querySelector("form"));
    console.log("form data: ");
    for(var pair of form_data.entries()) 
    {
        console.log(pair[0]+ ' : '+ pair[1]);
    }
    return true;
}

const ingredients = document.querySelectorAll("input")

// function addEvent(arr) {
    
//     arr.forEach(element => element.addEventListener("click", () => { // created here, without context. no this, cannot be rebound. fucked up.
//         console.log(this)
//     }))
// }

//addEvent(ingredients)

// for (let element of ingredients) {
//     console.log(element.checked)
// }

function what({ingredients: object, update}) {
    for (let element of ingredients) {
        //console.log(element.checked)
        //console.log(object)
        element.addEventListener("change", function() {
            if (this.checked) {
                // object.push(element)
                object.push(this)
                console.log(this)
            } else {
                object.filter(item => item !== this)
            }

            update(object)
        })

        // update(object)
        //console.log("LOS")
        // console.log(this)
        //console.log(object)
    }
}

// what()

class Hamburger {
    constructor() {
        this.ingredients = []
    }

    add(arr) {
        // addEvent(ingredients)

        for (let ingredient of ingredients) {
            if (ingredient.checked) {
                this.ingredients.push(ingredient)
            }
        }

        console.log(this.ingredients)
    }

    update(arr) {
        for (let ingredient of arr) {
            console.log(arr)
        }
    }

    log() {
        console.log(this.ingredients)
    }
}

let hamburger = new Hamburger();

what(hamburger)

hamburger.add()

console.log(hamburger.ingredients)

hamburger.log()
//hamburger.update()
