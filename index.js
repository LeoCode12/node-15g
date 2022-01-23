const parser = require("yargs-parser")(process.argv.slice(2))
const color = require("colors")
console.log('Hola'.rainbow, parser)