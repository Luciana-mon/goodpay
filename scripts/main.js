
const usuarios = [
    {
        nomeUsuario: "batata",
        email: "jose.almir@email.com",
        senha: "12345",
    },
    {
        nomeUsuario: "gabriel-braga",
        email: "gabriel.braga@email.com",
        senha: "12345",
    },
];

//dados de entrada de login 
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
// Botao de entrar
const btnEntrar = document.getElementById("btn-entrar");

// Ouvinte de evento
btnEntrar.addEventListener("click",() => {
    //1 captura os dados dos campos
    const email = campoEmail.value;
    const senha = campoSenha.value;
    //checar no array se existe ususario com email digitado
    let usuarioValido = usuarios.find((usuario) => usuario.email === email);

    if (usuarioValido !== undefined) {
        if (usuarioValido.senha === senha) {
            window.location.pathname = "/app.html";
        } else {
            alert("Senha incorreta!");
        }
    } else {
        // o usuário não existe
        alert("Usuário não existe!");
    }
});

