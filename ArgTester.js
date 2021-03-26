const { existsSync, readFileSync, copyFileSync, appendFileSync } = require("fs")

function print(x) {
  console.log(x)
}

class ArgTester {
  constructor() {
    this.args = process.argv
    this.input_exist = this.args.length <= 2 ? false : true
  }

  input_array(errMessage) {
    if (this.input_exist) {
      return this.args.slice(2)
    } else {
      console.log(errMessage)
      process.exit()
    }
  }

  input_files_exist() {
    const files = this.input_array()

    for (const file of files) {
      if (!existsSync(file)) {
        print(`file \`${file}\` doesn't exist`)
        process.exit()
      }
    }
  }

  readFile(file) {
    return readFileSync(file, "utf-8")
  }

  copyFile(input, output) {
    copyFileSync(input, output)
    process.exit()
  }

  appendFiles(files, output, connector = "\n") {
    for (const file of files) {
      const data = this.readFile(file)
      appendFileSync(output, connector + data)
    }
  }
}

module.exports = ArgTester
