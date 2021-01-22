function run() {
    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");
    const array1 = JSON.parse(input);
    const array2 = JSON.parse(input1);

    
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }


    output.innerText = array1;
}







function setHtmlForQuestion {
    document.getElementById("input").setAttribute("placeholder", "Array1");
    document.getElementById("input1").hidden = false;
    document.getElementById("input1").setAttribute("placeholder", "Array2");
}