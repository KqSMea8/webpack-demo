// index
let bar = 'Hello World! Main1.js'
let hello = `${ bar }`

let txt = document.createTextNode(hello)
let p = document.createElement("h1")
p.appendChild(txt)
document.body.appendChild(p)
