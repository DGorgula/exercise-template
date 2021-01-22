function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const array = JSON.parse(input);
    const orderedArray = [];
    
    for (let num of array) {
        if (orderedArray.length === 0) {
            orderedArray.push(num);
            // console.log(n);
            // Number.parseInt(
            continue;
        }
        for (let i = 0; i < orderedArray.length; i++) {
            if ((num) < (orderedArray[i])) {
                orderedArray.splice(i, 0, num);
                console.log(num+' is smaller');
                break;
            }
            else if(i === orderedArray.length-1){
                orderedArray.push(num);
                console.log(num+' is smaller');
                break;
            }
            else{
                continue;
            }

        }
    }
    
    output.innerText = orderedArray;
}





function setHtmlForQuestion{

};