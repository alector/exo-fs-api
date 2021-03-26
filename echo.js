const ArgTester = require("./ArgTester")

Tester = new ArgTester()

let errorMessage = "Please add some arguments. Follow the example:`node echo.js hello hard fork`"

console.log(Tester.input_array(errorMessage).join(" "))
