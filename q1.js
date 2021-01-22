function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    //      if input begins with '[' and ends with ']'
    if(/(^\[.+\]$)/i.test(input)) {
        out = true;
    }else{
        out = false;
    }

    output.innerText = out;
}




function setHtmlForQuestion() {
    document.getElementById("input").setAttribute("placeholder", "Something to check if Array");
}