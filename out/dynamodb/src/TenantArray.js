"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenant = void 0;
var config = require("./configuration/pulse-config-dev");
function tenant() {
    var TenantConfig = config;
    TenantConfig = JSON.parse(config);
}
exports.tenant = tenant;
//# sourceMappingURL=TenantArray.js.map