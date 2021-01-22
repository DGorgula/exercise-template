function run() {

    const input = document.getElementById("input").value;
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");
    const data = JSON.parse(input);
    const out = [];
    let stopper;
    

    //  define stopper for the 'for' loop by the smaller value
    
    if (input1 <= data.length) {
        stopper = input1;
    }
    else{
        stopper = data.length;
    }


    //  putting relevant array values in the output variable.

    for (let i = 0; i < stopper; i++) {
        out.push(data[i]);
    }



    output.innerText = out;
}





//  not part of the exercize, just making it nicer.

function setHtmlForQuestion {
    document.getElementById("input").setAttribute("placeholder", "Array");
    document.getElementById("input1").hidden = false;
    document.getElementById("input1").setAttribute("placeholder", "number");
}