const ArgTester = require("./ArgTester")

function print(x) {
  console.log(x)
}

const Tester = new ArgTester()

let errorMessage = "Please add a file as argument. Follow the example: node cat.js file1.txt file2.txt file3.txt"

const files = Tester.input_array(errorMessage)
Tester.input_files_exist()

for (const file of files) {
  console.log(Tester.readFile(file))
}
