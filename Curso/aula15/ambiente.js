let num = [5,8,4]

console.log(`Nosso vetor é o [${num}], esse vetor tem ${num.length} elementos.`) 

/*
for (var i = 0; i < num.length; i++) {
    console.log(`O elemento ${i} é o número ${num[i]}`)
}


for (let pos in num) {
    console.log(num[pos])
}
*/

let pos = num.indexOf(5)
console.log(`O valor 5 está na posiçào ${pos}`)