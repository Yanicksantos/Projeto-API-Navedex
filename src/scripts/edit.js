const $name = document.querySelector(".nome")
const $cargo = document.querySelector(".cargo")
const $idade = document.querySelector(".idade")
const $tempo = document.querySelector(".tempo")
const $projetos = document.querySelector(".projetos")
const $image = document.querySelector(".url_naver")
const $open_modal = document.querySelector(".open_modal")
var url = window.location.search;
const usuario_edit =JSON.parse(localStorage.getItem("_usuario_"))
let data_edit
let id_edit 
const api = {
    url:"https://navedex-api.herokuapp.com/v1/navers"
}

async function editando(){
    if(usuario_edit==null){
        location.href="login.html"
    }else{
        //requisição
        let parametros = new URLSearchParams(url)
        id_edit = parametros.get("id")
        console.log(id_edit)
        const response_edit = await fetch(api.url+`/${id_edit}`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + usuario_edit.token
            }
        })

        data_edit = await response_edit.json()
        console.log(data_edit)

        if(response_edit.ok){
            $name.value = data_edit.name
            $cargo.value = data_edit.job_role
            $idade.value = "04/03/1994" //data_edit.birthdate
            $tempo.value = "10/10/2020"//data_edit.admission_date
            $projetos.value = data_edit.project
            $image.value = "https://thumbs.dreamstime.com/b/desenho-animado-do-perfil-executivo-funcion%C3%A1rio-de-escrit%C3%B3rio-da-empresa-ilustra%C3%A7%C3%A3o-vetorial-oper%C3%A1ria-avatar-no-estilo-224793366.jpg"
        }

        
    }

}

editando()


document.querySelector(".atualizado").addEventListener("click", async (event) =>{
    event.preventDefault()
    if(($name.value != data_edit.name)
    ||($cargo.value!= data_edit.job_role)
    ||($idade.value != "04/03/1994")
    ||($tempo.value != "10/10/2020")
    ||($projetos.value != data_edit.project)
    ||($image.value != "https://thumbs.dreamstime.com/b/desenho-animado-do-perfil-executivo-funcion%C3%A1rio-de-escrit%C3%B3rio-da-empresa-ilustra%C3%A7%C3%A3o-vetorial-oper%C3%A1ria-avatar-no-estilo-224793366.jpg")){
        const response = await fetch(api.url+`/${id_edit}`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + usuario_edit.token
            },
            body:JSON.stringify({
                "job_role": `${$cargo.value}`,
                "admission_date": `${$tempo.value}`,
                "birthdate": `${$idade.value}`,
                "name": `${$name.value}`,
                "project": `${$projetos.value}`,
                "url": `${$image.value}`
            })
        })
        if(response.ok){
            document.querySelector(".open_modal").style.display="flex"
        }
    }
})



document.querySelector("#exit_modal").addEventListener("click", ()=> {
    document.querySelector(".open_modal").style.display="none"
    location.href="home.html"
})

document.onclick = function(event) {
    if (event.target == $open_modal) {
        $open_modal.style.display = "none";
        location.href="home.html"
    }
}