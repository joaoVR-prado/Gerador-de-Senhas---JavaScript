import geraSenha from "./gerador";

const senhaGerada = document.querySelector(".resultado");
const qtdCaracteres = document.querySelector(".qtdCaracteres");
const checkboxMaiscula = document.querySelector(".checkboxMaiusculas");
const checkboxMinuscula = document.querySelector(".checkboxMinusculas");
const checkboxNumeros = document.querySelector(".checkboxNumeros");
const checkboxSimbolos = document.querySelector(".checkboxSimbolos");
const gerarSenha = document.querySelector(".gerarSenha");

export default () => {
    gerarSenha.addEventListener("click", () =>{
        senhaGerada.innerHTML = gera();

    });
};

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        checkboxMaiscula.checked,
        checkboxMinuscula.checked,
        checkboxNumeros.checked,
        checkboxSimbolos.checked

    );

    return senha || "Selecione pelo menos uma opção!";

}