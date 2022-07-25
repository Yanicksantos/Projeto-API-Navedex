var url = window.location.search;
if(url.split("?")[1]!=null){
    var parametros = new URLSearchParams(url)
    var nome = parametros.get("nome")
    document.querySelector(".nome").value = `${nome}`
    var profissao = parametros.get("profissao")
    document.querySelector(".cargo").value = `${profissao}`
    var idade = parametros.get("idade")
    document.querySelector(".idade").value = `${idade}`
    var tempo = parametros.get("tempo")
    document.querySelector(".tempo").value = `${tempo}`
    var projeto = parametros.get("projeto")
    document.querySelector(".projetos").value = `${projeto}`
} 

document.querySelector(".atualizado").addEventListener("click", (event) =>{
    event.preventDefault()
    document.querySelector(".open_modal").style.display="flex"
})
document.querySelector("#exit_modal").addEventListener("click", ()=> {
    document.querySelector(".open_modal").style.display="none"
})