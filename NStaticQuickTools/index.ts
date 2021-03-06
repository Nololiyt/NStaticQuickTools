import { tools } from './tools';

function printTool(name:string, guid:string, description:string) {
    let ul = document.getElementById("toolList");
    let li = document.createElement("li");
    
    let a = document.createElement("a");
    a.href = "./tools/" + guid + ".html";
    a.innerText=name;
    li.appendChild(a);
    li.append(": "+ description);
    ul.appendChild(li);
}

for (let i = 0; i < tools.length; i++) {
    let tool = tools[i];
    printTool(tool.name, tool.guid, tool.description);
}