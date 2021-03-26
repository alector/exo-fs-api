const ArgTester = require("./ArgTester")

// print(ArgTester)
const Tester = new ArgTester()

errorMessage = "Please add two files as argument. Follow the example: node cp.js src.txt dst.txt"
const files = Tester.input_array(errorMessage)
Tester.input_files_exist()

if (files.length == 2) {
  Tester.copyFile(files[0], files[1])
} else {
  console.log(errorMessage)
}
