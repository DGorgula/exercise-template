function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i]%2 === 0 && input[i+1]%2 === 0) {
            if (i ===input.length-1) {
                out += input[i];
            }    
            else {
                out += input[i] + '-';
            }
        }
        else {
            out += input[i];
        }
    }
    
    output.innerText = out;
}



function setHtmlForQuestion{
    
};