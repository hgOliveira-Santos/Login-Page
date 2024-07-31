document.addEventListener("DOMContentLoaded", function(){
    const botão = document.getElementById("login-btn");

    botão.addEventListener("click", ()=>{
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const lembrarMe = document.getElementById("lembrar-me").checked;

        if(username === "" || password === ""){
            alert("Preencha todos os campos!");
            return;
        }
    
        if(username === "hgzx" && password === "hgzx7"){
            alert("Usuário logado!");
        } else{
            alert("Nome de usuário ou senha incorretos")
        }
    
        if(lembrarMe){
            console.log("Usuário optou por lembrar o login");
        }
       
    })
})