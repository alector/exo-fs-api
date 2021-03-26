const { existsSync, readFileSync } = require("fs")
const counter = require("word-counter-api")
const { Command } = require("commander")

const args = process.argv
const program = new Command()
program.option("-l, --lines [value]", "number of lines").option("-w, --words [value]", "number of words").option("-c, --characters [value]", "number of characters").parse()

const options = program.opts()
const file = args.pop()
let lines, words, characters

if (!file) {
  console.log("The last argument must be an existing file. Example: node wc.js -l file.txt")
} else if (!existsSync(file)) {
  console.log(`The file \`${file}\` doesn't exist.`)
  process.exit()
} else {
  const data = readFileSync(file, "utf-8")
  lines = data.split("\n").length
  words = counter(data).words
  characters = counter(data).characters

  // console.log({ lines }, { words }, { characters })
}

if (options.lines) {
  console.log(`${lines} ${file}`)
} else if (options.characters) {
  console.log(`${characters} ${file}`)
} else if (options.words) {
  console.log(`${words} ${file}`)
} else {
  console.log(`${lines} ${words} ${characters} ${file}`)
}
