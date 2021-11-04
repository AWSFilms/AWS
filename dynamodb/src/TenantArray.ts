const config = require("./configuration/pulse-config-dev");

export function tenant(){
    let TenantConfig: string[] = config;
    TenantConfig = JSON.parse(config);
}