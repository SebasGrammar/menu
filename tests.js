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
        console.log(object)
        element.addEventListener("change", function() {
            if (this.checked) {
                // object.push(element)
                object.push(this)
                console.log(this)
            } else {
                object.filter(item => item !== this)
            }
        })

        update()
        console.log("LOS")
        // console.log(this)
        console.log(object)
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

    update() {
        for (let ingredient of ingredients) {
            //console.log(this.ingredients)
            //console.log(this.ingredients)
            console.log(this)
            console.log("I AM SPARTA")
            ingredient.style.background = "red"
        }
    }

    log() {
        console.log(this.ingredients)
    }
}

let hamburger = new Hamburger();

what(hamburger) // no this. That's why the above was not working.
// what.call(hamburger, hamburger) -> same thing.

let test = {
    name: "test",
    ingredients: [1, 2, 3],
    update() {
        console.log("nothing")
    },
    what(b) {
        what(b)
    }
}



hamburger.add()

console.log(hamburger.ingredients)

console.log("OE")
hamburger.log()
//hamburger.update()

console.log("HHHS")
test.what(test)