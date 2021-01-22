const blankArr = [];
function run() {
    const output = document.getElementById("output");
    for (let i = 0; i < blankArr.length; i++) {
        output.innerText += 'Element ' + i + ' = ' + blankArr[i] + '\n';
    }    

}

function add(){
    const input = document.getElementById("input").value;
    
    blankArr.push(input);

    
    //      input reset of value and placeholder

    document.getElementById("input").value = "";
    if (document.getElementById("input").getAttribute("placeholder")!== "Add another item or run") {
        document.getElementById("input").setAttribute("placeholder", "Add another item or run");
    }
}




function setHtmlForQuestion() {
    document.getElementById("input").setAttribute("placeholder", "Add a few items, then run");
    document.getElementById("add").hidden = false;
} 