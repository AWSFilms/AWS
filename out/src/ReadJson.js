"use strict";
function readJ() {
    "use strict";
    var fs = require("fs");
    var rawdata = fs.readFileSync("student.json");
    var student = JSON.parse(rawdata);
    console.log(student);
}
//# sourceMappingURL=ReadJson.js.map