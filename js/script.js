const side_nav = document.getElementById("side-nav");
const open_nav = document.getElementById("open-nav");
const close_nav = document.getElementById("close-nav");
const body = document.querySelector("body");


close_nav.addEventListener("click", (e) => {
    //console.log(e)
    side_nav.classList.add('hidden')
    open_nav.classList.remove('hidden')
    e.target.classList.add('flex-row')
    body.style = ''
})

open_nav.addEventListener("click", (e) => {
    //console.log(body.classList)
    side_nav.classList.remove('hidden')
    e.target.classList.add('hidden')
    close_nav.classList.add('flex')
    body.style.backgroundColor = "rgba(0,0,0,0.6)"
})

