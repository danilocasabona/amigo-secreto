// 1. Crie uma função que valide se um número é positivo, negativo ou zero.
function validaNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "zero";
    }
    return numero;
}

// 2. Implemente uma função que verifique se uma pessoa é maior de idade.
function verificaIdade(idade) {
    if (idade >= 18) {
        return "maior de idade";
    } else {
        return "menor de idade";
    }
    return idade;  // Retorna o valor da idade. Não é necessário retornar a função.
    // return verificaIdade(idade); // Retorna a função verificaIdade. Não é necessário retornar a função.
    // return verificaIdade(idade) === "maior de idade"; // Retorna se a pessoa é maior de idade. Não é necessário retornar a função.
    // return verificaIdade(idade) === "maior de idade" ? true : false; // Retorna se a pessoa é maior de idade. Não é necessário retornar a função.
}

// 3. Desenvolva uma função que valide se uma string é vazia ou não.
function validaString(string) {
    if (string === "") {
        return "string vazia";
    } else {
        return "string não vazia";
    }
    return string; // Retorna o valor da string. Não é necessário retornar a função.
    // return validaString(string); // Retorna a função validaString. Não é necessário retornar a função.
    // return validaString(string) === "string vazia" ? true : false; // Retorna se a string é vazia. Não é necessário retornar a função.
    // return validaString(string) === "string vazia" ? false : true; // Retorna se a string é vazia. Não é necessário retornar a função.
}

// 4. Crie uma função que determine se um ano é bissexto
function verificaBissexto(ano) {
    if (ano % 4 == 0) {
        return "ano bissexto";
    } else {
        return "ano não bissexto";
    }
    return ano; // Retorna o valor do ano. Não é necessário retornar a função.
    // return verificaBissexto(ano); // Retorna a função verificaBissexto. Não é necessário retornar a função.
    // return verificaBissexto(ano) === "ano bissexto" ? true : false; // Retorna se o ano é bissexto. Não é necessário retornar a função.
    // return verificaBissexto(ano) === "ano bissexto" ? false : true; // Retorna se o ano é bissexto. Não é necessário retornar a função.
    // return verificaBissexto(ano) === "ano bissexto" ? "ano bissexto" : "an
}
// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function calculaMedia(num1, num2) {
    if (num1 && num2) {
        return (num1 + num2) / 2;
    } else {
        return "valor inválido";
    }
    return num1; // Retorna o valor do primeiro número. Não é necessário retornar a função.
    // return calculaMedia(num1, num2); // Retorna a função calculaMedia. Não é necessário retornar a função.
    // return calculaMedia(num1, num2) === "valor inválido" ? true : false; // Retorna se os valores são válidos. Não é necessário retornar a função.
    // return calculaMedia(num1, num2) === "valor inválido" ? false : true; // Retorna se os valores são válidos. Não é necessário retornar a função.
    // return calculaMedia(num1, num2) === "val

}

// 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function tamanhoArray(array) {
    return array.length;
}

// 7. Crie um array e utilize a função includes para verificar se um elemento específico está presente
function verificaElemento(array, elemento) {
    return array.includes(elemento);
    return array; // Retorna o valor do array. Não é necessário retornar a função.
    // return verificaElemento(array, elemento); // Retorna a função verificaElemento. Não é necessário retornar a função.
    // return verificaElemento(array, elemento) === true ? true : false; // Retorna se o elemento está presente no array. Não é necessário retornar a função.
    // return verificaElemento(array, elemento) === true ? false : true; // Retorna se o elemento está presente no array. Não é necessário retornar a função.
    // return verificaElemento(array, elemento) === true ? "elemento presente" : "elemento não presente"; // Retorna se o elemento está presente no array. Não é necessário retornar a função.
}

// 8. Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
function verificaElementoArray(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true;
        }
    }
    return false;
}

// 9. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
function verificaString(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(string)) {
            return true;
        }
    }
    return false;
    return array; // Retorna o valor do array. Não é necessário retornar a função.
    // return verificaString(array, string); // Retorna a função verificaString. Não é necessário retornar a função.
    // return verificaString(array, string) === true ? true : false; // Retorna se a string está presente no array. Não é necessário retornar a função.
    // return verificaString(array, string) === true ? false : true; // Retorna se a string está presente no array. Não é necessário retornar a função.
}

// 10. Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.
function verificaEstudante(array, estudante) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].nome === estudante.nome && array[i].idade === estudante.idade) {
            return true;
        }
    }
    return false;
    return array; // Retorna o valor do array. Não é necessário retornar a função.
    // return verificaEstudante(array, estudante); // Retorna a função verificaEstudante. Não é necessário retornar a função.
    // return verificaEstudante(array, estudante) === true ? true : false; // Retorna se o estudante está presente no array. Não é necessário retornar a função.
    // return verificaEstudante(array, estudante) === true ? false : true; // Retorna se o estudante está presente no array. Não é necessário retornar a função.
}

// 11. Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
function somaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            somaPares += array[i];
        } else {
            produtoImpares *= array[i];
        }
    }
    return [somaPares, produtoImpares];
}