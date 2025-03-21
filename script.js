/*
console.log("Hello World")
console.log("Borsato")
console.info("info")
console.warn("warn")
console.error("error")

console.table([
    {id: 1, tarefa: "Estudar JS"},
    {id: 2, tarefa: "Praticar Código"}
])

console.group("Grupo de Logs")
console.log("Log 1")
console.log("Log 2")
console.groupEnd()

console.time("Timer")
//...algum processamento
if (1 == 2) {
    console.log(nao)
}
console.timeEnd("Timer")  

var antigo = "valor var"

console.log(antigo)

let variavelMutavel = "valor que pode ser alterável"

const variavelImutavel = "valor que nao pode ser alterado diretamente"

variavelMutavel = 1

console.log(variavelMutavel)

console.log(variavelImutavel)
*/

//tipos de dados primitivos
/*
let texto = "texto"
console.log(typeof texto)

let numero = 0
console.log(typeof numero)

let isCompleted = false
console.log(typeof isCompleted)

let semValor
console.log(typeof semValor)

let nulo = null
console.log(typeof null)

let uniqueId = Symbol("id")
console.log(typeof uniqueId)

let bigNumero = 999999999999999n
console.log(typeof bigNumero)
 */

//tipos de dados complexos

/*
let taks = [
    {id: 1, tarefa: "Estudar JS"},
    {id: 2, tarefa: "Praticar Código"}
]
console.log(tasks)
console.log(tasks[0]["id"])


let tarefa = [
    { id: 1, tarefa: "Estudar JS"}
]
console.log(tarefa)
console.log(tarefa.id)
console.log(tarefa.tarefa)
*/

let hoje = new Date()
console.log(hoje)

let pattern = /^[a-z]+$/i;
console.log(pattern)