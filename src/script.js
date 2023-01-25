let carousel = document.getElementById("carousel")
let btn_prev = document.querySelector("#carousel .buttons .prev")
let btn_next = document.querySelector("#carousel .buttons .next")
let btn_random = document.querySelector("#random   .random ")
let review = document.querySelectorAll("#carousel .carous")



let i = 0

if (i >= review.length) {
    i = 0
}

btn_next.onclick = function () {
    review[i].style.display = "none"
    i++
    if (i > review.length) {
        i = review.length + 1
    } else if (i === review.length) {
        i = 0
    }

    review[i].style.display = "block"
}

btn_prev.onclick = function () {
    review[i].style.display = "none"
    i = i - 1
    if (i < 0) {
        i = review.length - 1
    }
    review[i].style.display = "block"
}




document.getElementById("next-random").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * review.length)
    review[i].style.display = "none"
    i = randomIndex
    review[randomIndex].style.display = "block"
})


let mobilSlid = document.getElementById("mobilSlide")
let foto = document.querySelectorAll("#mobilSlide .mobilSlid")
let pmob = document.querySelector("#mobilSlide .prevMob")
let nmob = document.querySelector("#mobilSlide .nextMob")

let y = 0


if (y >= foto.length) {
    y = 0
}

nmob.onclick = function () {
    foto[y].style.display = "none"
    y++
    if (y > foto.length) {
        y = foto.length + 1
    } else if (y === foto.length) {
        y = 0
    }

    foto[y].style.display = "block"
}

pmob.onclick = function () {
    foto[y].style.display = "none"
    y = y - 1
    if (y < 0) {
        y = foto.length - 1
    }
    foto[y].style.display = "block"
}

