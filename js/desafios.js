// 2. Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamada novaLista. Imprima novaLista no console.
const minhaLista = [1, 2, 3];
const novaLista = minhaLista.concat([1, 4, 5, 6]);
console.log(novaLista);

// 3. Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop();
console.log(novaLista);

// 4. Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.
function shuffle(novaLista) {
    let currentIndex = novaLista.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [novaLista[currentIndex], novaLista[randomIndex]] = [novaLista[randomIndex], novaLista[currentIndex]];
    }
    return novaLista;
}

// 5. Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.
function removerDuplicatas(novaLista) {
    //remove elementos duplicado
    novaLista = novaLista.filter((item, index) => novaLista.indexOf(item) === index);
    return novaLista
}