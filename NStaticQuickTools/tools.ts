export class Tool {
    constructor(public name: string, public guid: string, public description: string) {

    }
}

export let tools: Tool[] = [new Tool(
    "Base64 String - Byte Array Converter",
    "39f09c93-0d5b-ca7c-cdc8-185b00aec141",
    "Convert base64 strings to byte arrays, or byte arrays to base64 strings."
), new Tool(
    "Base64 String - File Converter",
    "979da122-6257-d8bd-494a-e16132adeae2",
    "Convert base64 strings to files, or convert files to base64 strings."
), new Tool(
    "Guid String Generator",
    "b2401d0a-da7d-4571-a2e5-7993d7e221fc",
    "Generate guid strings."
), new Tool(
    "Random Integer Generator",
    "13eae077-d3b3-4712-1fb6-5440c889d853",
    "Generate random integers."
), new Tool(
    "QR Code Scanner",
    "6982b066-d93b-735a-4822-11dda757d38e",
    "Scan QR codes."
)];
tools.sort((a, b) => a.name.localeCompare(b.name));