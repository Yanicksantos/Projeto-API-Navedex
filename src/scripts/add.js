const $add = document.querySelector(".add")
$add.addEventListener("click", (event) =>{
    event.preventDefault()
    document.querySelector(".open_modal").style.display="flex"
})
document.querySelector("#exit_modal").addEventListener("click", ()=> {
    document.querySelector(".open_modal").style.display="none"
})