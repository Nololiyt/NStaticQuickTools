import { tools } from './tools';

function printTool(name:string, guid:string, description:string) {
    var ul = document.getElementById("toolList");
    var li = document.createElement("li");
    
    var a = document.createElement("a");
    a.href = "./tools/" + guid + ".html";
    a.innerText=name;
    li.appendChild(a);
    li.append(": "+ description);
    ul.appendChild(li);
}

for (var i = 0; i < tools.length; i++) {
    var tool = tools[i];
    printTool(tool.name, tool.guid, tool.description);
}