function dau6() {
    return Math.floor(Math.random() * 6) + 1
}

//funcio que generica que retorna un array n numeros entre 1 i 6

function getTirades(n){
    return [...Array(n)].map(dau6);
}

//funcio que retorni la suma de tots els elements de l'array

function sum(nums){
    return nums.reduce((acc, num) => acc + num, 0);
}

export {dau6, getTirades, sum};