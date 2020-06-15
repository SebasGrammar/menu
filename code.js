"use strict"

function handleData() {
    console.log("Order submitted.")
}

const ingredients = document.querySelectorAll("input")

const cheese = document.querySelector(".cheese")

function associateIngredients(list) {

    let ingredients = {}

    for (let ingredient of list) {

        let element = document.querySelector(`.${ingredient.value.toLowerCase().replace(" ", "-")}`)
        ingredients[ingredient.value] = {
            trigger: ingredient,
            state: false,
            element
        }
    }

    return ingredients

}

let test = associateIngredients(ingredients);


const choices = {
    block: "none",
    none: "block"
}

for (let item in test) {

    let menu = test[item]

    menu.trigger.addEventListener("change", function() {

        const state = getComputedStyle(menu.element).display

        menu.element.style.display = choices[state]
    })

}