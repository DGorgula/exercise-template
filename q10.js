function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const array = JSON.parse(input);
    let out = "";
    // const array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    
    for (let i = 0; i  < array.length; i++) {
        out += "Row " + i + '\n';
        
        for (let j = 0; j < array[i].length; j++) {
            out += array[i][j] + '\n';
        }
    }
    output.innerText = out;
}





function setHtmlForQuestion(){
    const input = document.getElementById("input").value = '[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]';
};