const ArgTester = require("./ArgTester")

function print(x) {
  console.log(x)
}

// print(ArgTester)
const Tester = new ArgTester()

let errorMessage = "Please add a file as argument. Follow the example: node cat.js file1.txt file2.txt file3.txt"

const files = Tester.input_array(errorMessage)
console.log({ files })
Tester.input_files_exist()

// print all input
for (const file of files) {
  console.log(Tester.readFile(file))
}
