{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
      {
        "type": "aws-sam",
        "request": "direct-invoke",
        "name": "my-work-projects:dynamodb/src/TenantArray.tenant (nodejs14.x)",
        "invokeTarget": {
          "target": "code",
          "projectRoot": "${workspaceFolder}/",
          "lambdaHandler": "dynamodb/src/TenantArray.tenant"
        },
        "lambda": {
          "runtime": "nodejs14.x",
          "payload": {},
          "environmentVariables": {}
        }
      },
      {
        "name": "Debug Source File",
        "type": "node",
        "request": "launch",
        "skipFiles": [
          "<node_internals>/**"
        ],
        "program": "${file}",
        "preLaunchTask": "tsc: build - tsconfig.json"
      },
      {
        "type": "node",
        "request": "launch",
        "name": "Debug File",
        "program": "${file}"
    }
    ]
}