function checkInclusion(arr, num){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num){
            return true;
        }
    }
    return false;
}

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const data = JSON.parse(input);
    const duplateValues = [];
    
    // [1, 2, 3, 4, 5, 6, 7, 4, 1]
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        if (i === j) {
            continue;
        }
        else if (data[i] === data[j]) {
            if(checkInclusion(duplateValues, data[i])){
                break;
            }
            else{
                duplateValues.push(data[i])
            }
        }
    }
}

    output.innerText = duplateValues;
}


function setHtmlForQuestion() {
    document.getElementById("input").setAttribute("placeholder", "Array");
}