const $email_login = document.querySelector(".email_login")
const $password = document.querySelector(".password")
const $button_entrar = document.querySelector(".button_entrar")

const api = {
    url:"https://navedex-api.herokuapp.com/v1/users/login",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1MzJiMTJjLTRmNzgtNGZjOS04Y2ExLTgwNjQ4NzE0Yjk3NSIsImVtYWlsIjoieWFuaWNrdGVzdGVAYXBpLmNvbSIsImlhdCI6MTY1Nzg5ODQyN30.4e1gYOAxH3DhVQr1GCqaSUEn7pe0ON1gZP6BEVnz_QQ",
}

function Entrar(){
    document.querySelector(".alert").style.display="none"
    if($email_login.value.length > 0 && $password.value.length> 0){
        login($email_login.value, $password.value)
    }
    else{
        document.querySelector(".alert").style.display="block"
        document.querySelector(".alert_span").textContent="Voce precisa preencher todos os campos."
    }
}


async function login(email, senha){
    try {
        const response = await fetch(api.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: senha
            })
        })
        const data = await response.json()
        if(response.ok){
            console.log(data)
            location.href=`home.html?id=${data.id}`
        }
        else{
            document.querySelector(".alert").style.display="block"
            document.querySelector(".alert_span").textContent=`${data.message}`
        } 
        
    } catch (error) {
        document.querySelector(".alert").style.display="block"
        document.querySelector(".alert_span").textContent=`${error.message}`
    }
}
