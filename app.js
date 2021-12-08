
const quit = "quit"
let cmd = prompt("choose one of the commands: new, list, delete, quit");
const list = []
while (cmd !== quit) {
     if (cmd === "new") {     //ПРАВЕЊЕ НОВ ИТЕМ У ЛИСТ
          let newItem = prompt("add")
          list.push(newItem)
          console.log(`${newItem} added to the list`)
          cmd = prompt("choose one of the commands: new, list, delete, quit");
     } else if (cmd === "list") {    //ПРИКАЖУВАЊЕ НА ЛИСТАТА
          console.log("**********")
          for (let i = 0; i < list.length; i++) {
               console.log(`${i + 1}. ${list[i].toUpperCase()}`)
          } if (list.length < 1) {
               console.log("the list is empty")
          }
          console.log("**********")
          cmd = prompt("choose one of the commands: new, list, delete, quit");
     } else if (cmd === "delete") { //БРИШЕЊЕ НА ЛИСТАТА
          let deleteItem = parseInt(prompt("which todo wanna delete?"))
          if (!deleteItem || deleteItem > list.length) { //АКО СЕ ВНЕСЕ НЕВАЛИДЕН БРОЈ
               alert("todo doesn't exist")
          } else if (deleteItem <= list.length) { //АКО БРОЈО Е ВАЛИДЕН
               let deleted = list.splice((deleteItem - 1), 1)
               console.log(`Todo ${deleted} is deleted`)
               // for (let i = 0; i < list.length; i++) {
               //      console.log(`${i + 1}. ${list[i].toUpperCase()}`)
               // }
          }
          cmd = prompt("choose one of the commands: new, list, delete, quit");

     } else { //АКО Е НЕВАЛИДНА КОМАНДАТА
          cmd = prompt("invalid command, choose one of the commands: new, list, delete, quit");

     }
}
console.log("okay, bye bye")