function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");
    const out = [];
    for (let i = input; i <= input1; i++) {
        // i%4 === 0 
        if (i%4 === 0 && !(i%100  === 0)) {
            out.push(i);
        }
        else if(i%400 === 0){
            out.push(i);
        }
    }
    output.innerText = out;
}










function setHtmlForQuestion {
    document.getElementById("input").setAttribute("placeholder", "Start Year");
    document.getElementById("input1").hidden = false;
    document.getElementById("input1").setAttribute("placeholder", "End Year");
}