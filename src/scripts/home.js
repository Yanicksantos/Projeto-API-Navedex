const $navers_home = document.querySelector(".navers_home")

const api = {
    url:"https://navedex-api.herokuapp.com/v1/navers"
}

async function preencherNavers(){
    const usuario =JSON.parse(localStorage.getItem("_usuario_"))
    if(usuario==null){
        location.href="login.html"
    }else{
        //requisição
        const response = await fetch(api.url,{
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + usuario.token
            }
        })

        const navers = await response.json()
        console.log(navers)
        if(response.ok){
            for(let i=0; i<navers.length; i++){
                $navers_home.innerHTML+=`<div class="navers"><div class="img_home"><div class="view_details"><div class="view">Ver mais...</div></div><img class="img_home" src="https://thumbs.dreamstime.com/b/desenho-animado-do-perfil-executivo-funcion%C3%A1rio-de-escrit%C3%B3rio-da-empresa-ilustra%C3%A7%C3%A3o-vetorial-oper%C3%A1ria-avatar-no-estilo-224793366.jpg" alt=""></div><div class="info_navers"><div class="name">${navers[i].name}</div><div class="profission">${navers[i].job_role}</div></div><div class="options_home"><i class="fa-solid fa-trash delete"></i><i class="fa-solid fa-pen put"></i></div></div>`
            }
            const $view = document.querySelectorAll(".view")
            const $exit_modal =document.querySelector("#exit_modal")
            const $open_modal = document.querySelector(".open_modal")
            const $excluir_modal = document.querySelector(".excluir_modal")
            const $info_naver = document.querySelector(".info_naver")
            const $modal_details = document.querySelector(".modal_details")
            const $delete = document.querySelectorAll(".delete")
            const $put = document.querySelectorAll(".put")
            const $cancelar = document.querySelector(".button_cancelar")
            const $button_exluir = document.querySelector(".button_exluir")
            const $add = document.querySelector(".add")

            $view.forEach(element => {
                element.addEventListener("click", () => {
                    $excluir_modal.style.display="none"
                    $info_naver.style.display="none"
                    opennmodal()
                    $modal_details.style.display="flex"
                })
            });

            $put.forEach(put => {
                put.addEventListener("click", () => {
                   editar()
                })
            });

            $put.forEach(put => {
                put.addEventListener("click", () => {
                   editar()
                })
            });


            document.onclick = function(event) {
                if (event.target == $open_modal) {
                $open_modal.style.display = "none";
                }
            }



            $delete.forEach(del => {
                del.addEventListener("click", () => {
                    $exit_modal.style.display="none"
                    $modal_details.style.display="none"
                    $info_naver.style.display="none"
                    opennmodal()
                    $excluir_modal.style.display="block"

                })
            });




            $button_exluir.addEventListener("click", ()=> {
                $modal_details.style.display="none"
                $excluir_modal.style.display="none"
                opennmodal()
                $info_naver.style.display="block"
                $exit_modal.style.display="block"
            })


            $cancelar.addEventListener("click", ()=> $open_modal.style.display="none")
            $exit_modal.addEventListener("click", ()=> $open_modal.style.display="none")
            function opennmodal(){document.querySelector(".open_modal").style.display="flex"}
            function editar(){
                $exit_modal.style.display="none"
                $modal_details.style.display="none"
                $info_naver.style.display="none"
                $open_modal.style.display="none"
                $excluir_modal.style.display="block"
                location.href=`editar.html?nome=YanickSantos&profissao=Front-end Developer&idade=28&tempo=50&projeto=nao sei onde está o erro`;
            }
        }else{
            alert("Ocorreu algum erro! Tente reiniciar...")
        }
    }
}
preencherNavers()


