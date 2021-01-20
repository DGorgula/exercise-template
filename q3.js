function run() {

    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");
    const data = JSON.parse(input);
    const out = [];
    let stopper;
    

    //  checks which is smaller
    
    if (input1 <= data.length) {
        stopper = input1;
    }
    else{
        stopper = data.length;
    }


    //  putting them in the output variable.

    for (let i = 0; i < stopper; i++) {
        out.push(data[i]);
    }



    output.innerText = out;
}





//  not part of the exercize, just making it nicer.

function bla() {
    document.getElementById("input").setAttribute("placeholder", "Array");
    document.getElementById("input1").setAttribute("placeholder", "number");
}