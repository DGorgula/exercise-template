function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    const data = JSON.parse(input);
    out = Array.isArray(data);

    output.innerText = out;
}