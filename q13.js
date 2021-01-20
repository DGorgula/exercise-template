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
}




function bla() {
    document.getElementById("input").setAttribute("placeholder", "Put item here");
    document.getElementById("add").hidden = false;
} 