const $add = document.querySelector(".add")
const $name = document.querySelector(".nome")
const $cargo = document.querySelector(".cargo")
const $idade = document.querySelector(".idade")
const $tempo = document.querySelector(".tempo")
const $projetos = document.querySelector(".projetos")
const $url_naver = document.querySelector(".url_naver")

let apis = {
    url:"https://navedex-api.herokuapp.com/v1/navers"
}
const usuario_add=JSON.parse(localStorage.getItem("_usuario_"))

$add.addEventListener("click", async (event) =>{
    event.preventDefault()
    if(($name.value.length >0)
    &&($cargo.value.length>0)
    &&($projetos.value.length>0)
    &&($url_naver.value.length>0)){
        const responses = await fetch(apis.url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + usuario_add.token
            },
            body:JSON.stringify({
                "job_role": `${$cargo.value}`,
                "admission_date": "19/08/2018",
                "birthdate": "12/04/1992",
                "project":`${$projetos.value}`,
                "name":  `${$name.value}`,
                "url": "test-path/image-test.png"
            })
        })
        console.log(responses)
        if(responses.ok){
            document.querySelector(".open_modal").style.display="flex"
        }
    }
})
document.querySelector("#exit_modal").addEventListener("click", ()=> {
    document.querySelector(".open_modal").style.display="none"
    location.href="home.html"
})

document.querySelector("#exit_modal").addEventListener("click", ()=> {
    document.querySelector(".open_modal").style.display="none"
    location.href="home.html"
})