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

document.onclick = function(event) {
    if (event.target == $open_modal) {
      $open_modal.style.display = "none";
    }
}

$view.forEach(element => {
    element.addEventListener("click", () => {
        $excluir_modal.style.display="none"
        $info_naver.style.display="none"
        opennmodal()
        $modal_details.style.display="flex"
    })
});

$delete.forEach(del => {
    del.addEventListener("click", () => {
        $exit_modal.style.display="none"
        $modal_details.style.display="none"
        $info_naver.style.display="none"
        opennmodal()
        $excluir_modal.style.display="block"

    })
});

$put.forEach(put => {
    put.addEventListener("click", () => {
       editar()
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
