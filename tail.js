const { existsSync, readFileSync, copyFileSync, appendFileSync } = require("fs")

const { Command } = require("commander")

const program = new Command()
const default_lines_to_print = 10
program.option("-n, --number [value]", "number of lines to print", default_lines_to_print).parse()

const options = program.opts()
const file = program.args[0]

lines_to_print = Number(options.number)
if (!file) {
  console.log("Please add a file. Example: node tail.js -n 20 file.txt  ")
} else if (isNaN(lines_to_print)) {
  console.log("Please add a number as a -n variable. Example: node tail.js file.txt -n 10")
} else if (!existsSync(file)) {
  console.log(`file \`${file}\` doesn't exist`)
  process.exit()
} else {
  const data = readFileSync(file, "utf-8")
  fileArray = data.split("\n")
  if (fileArray.length >= lines_to_print) {
    msg = fileArray.slice(lines_to_print * -1)
    console.log(msg.join("\n"))
  } else {
    console.log(`The file \`${file}\` needs at least ${lines_to_print} lines `)
  }
}
