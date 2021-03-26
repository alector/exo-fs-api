const ArgTester = require("./ArgTester")

const Tester = new ArgTester()

errorMessage = "Please add *at least* two files as argument. Follow the example: node append.js src1.txt src2.txt src3.txt dst.txt"
const files = Tester.input_array(errorMessage)
Tester.input_files_exist()

if (files.length >= 2) {
  output = files.pop()
  input = files

  Tester.appendFiles(input, output)
} else {
  console.log(errorMessage)
}
