export var tools = [{
    name: "Base64 String - Byte Array Converter",
    guid: "39f09c93-0d5b-ca7c-cdc8-185b00aec141",
    description: "Convert base64 strings to byte arrays, or byte arrays to base64 strings."
}, {
    name: "Base64 String - File Converter",
    guid: "979da122-6257-d8bd-494a-e16132adeae2",
    description: "Convert base64 strings to files, or convert files to base64 strings."
}, {
    name: "Guid String Generator",
    guid: "b2401d0a-da7d-4571-a2e5-7993d7e221fc",
    description: "Generate guid strings."
}, {
    name: "Random Integer Generator",
    guid: "13eae077-d3b3-4712-1fb6-5440c889d853",
    description: "Generate random integers."
}, {
    name: "QR Code Scanner",
    guid: "6982b066-d93b-735a-4822-11dda757d38e",
    description: "Scan QR codes."
}];
tools.sort((a, b) => a.name.localeCompare(b.name));