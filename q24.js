function run() {
    let array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
        for (let i = 0; i < array.length; i++) {
            if (!array[i]) {
                array.splice(i, 1);
                i--
            }
        }
    output.innerText = `The array:\n[NaN, 0, 15, false, -22, '', undefined, 47, null]\n without its falsy values = ${+array}`;
}


// console.log(run() === [ 15, -22, 47 ]);



function setHtmlForQuestion() {
    document.getElementById("input").setAttribute("placeholder", "Just click \'Run\'");
    //  = "[NaN, 0, 15, false, -22, '', undefined, 47, null]";
}