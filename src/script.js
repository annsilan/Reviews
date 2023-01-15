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



let quotes = [
    [
        "Oтель расположен прямо на берегу моря и в нескольких минутах ходьбы от некоторых ресторанов. Обратите внимание, что море бурное и не подходит для купания. Опытные серферы могут выйти в море прямо из отеля. На туктуке за 20 минут можно добраться до Велигамы, где есть большой пляж для купания и серфинга для начинающих. Номера отеля со вкусом оформлены и очень чистые, со всеми удобствами, такими как вода, кофе/чай, холодильник, сейф, туалетные принадлежности и т.д. Персонал очень дружелюбный и услужливый, и у нас также была хорошая еда в отеле. Сад не очень большой, но предлагает прекрасный вид на море и имеет хороший бассейн. Одним словом, хороший отель для отдыха.",
    ],

    [
        "Это шикарное пейзажное место с великолепным обслуживанием. Завтраки и ужины готовились индивидуально, по предварительному получению наших пожеланий. Все очень вкусно, красиво и сытно. Океан идеален для серфинга, и вы всегда можете наблюдать серфингистов лежа из бассейна. До пляжа, где можно купаться можно дойти пешком. Вероятно не подходит это место для маленьких детей. Мы были здесь три ночи, и уезжать совершенно не хотели. Очень душевное место.",
    ],

    [
        "Очень доброжелательный и внимательный персонал. Узнав, что у нас медовый месяц, бесплатно повысили класс проживания. В номере нас ждали фрукты и охлаждённое вино, а так же ванна с лепестками экзотических цветов. Завтрак каждое утро сервировали на балконе в номере. Тихое, спокойное место, удаленное от городской суеты. Тишину нарушает только шум океана. При этом до ближайшего пляжа и кафе можно дойти за 10 минут. Будем рекомендовать это место своим друзьям. Спасибо за наш волшебный медовый месяц!!! Мы уже скучаем!",
    ],

    [
        "Расположение было тихим и спокойным, прямо на восхитительном перерыве для серфинга, персонал был безупречным и невероятно любезным ко всем потребностям (с 16-месячным ребенком), еда была фантастической, номер удобный, бассейн чистый и спокойный.",
    ],

    [
        "Расположение было восхитительным, с прекрасным видом на море и местом для серфинга прямо перед отелем, что идеально подходило моему мужу. Вся еда, которую мы ели, была отличной. Персонал был невероятно любезным и внимательным, организовал массаж на месте, а также взял напрокат доску для серфинга для моего мужа и всегда проверял, есть ли что-нибудь, что нам нужно. Отель находится в прекрасном месте, поблизости есть несколько хороших кафе, ресторанов и мест для сноркелинга. Мы также видели много черепах в море прямо перед отелем.",
    ],
]

document.getElementById("next-random").addEventListener("click", function () {
    var quote = quotes[Math.floor(Math.random() * quotes.length)]

    var Maxim = document.querySelector("#Maxim")
    var Maria = document.querySelector("#Maria")
    var John = document.querySelector("#John")
    var Lusia = document.querySelector("#Lusia")
    var Irina = document.querySelector("#Irina")

    Maxim.innerHTML = quote[0]
    Maria.innerHTML = quote[1]
    John.innerHTML = quote[2]
    Lusia.innerHTML = quote[3]
    Irina.innerHTML = quote[4]
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
/*

const slider = ItcSlider.getOrCreateInstance(".mobilSlider")

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".slider").forEach((el) => {
        ItcSlider.getOrCreateInstance(el)
    })
})*/

$(".carous").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
})
